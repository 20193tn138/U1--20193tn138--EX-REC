const producto = {
    nombre : '',
    cantidadProducto : 0,
    precioProducto : 0,
    calcularCosto: ()=>{
        //calcular cantida de producto * precio del producto
        costo = cantidadProducto * precioProducto;
    } 
}


function addProduct() {
    let nombreProducto = document.getElementById("nombreProducto").value;
    let cantidadProducto = document.getElementById("cantidadProducto").value;
    let precioProducto = document.getElementById("precioProducto").value;
    
    carrito.productos.push(nombreProducto, cantidadProducto, precioProducto);
}

const carrito = {
    productos : [],
    folio : '',
    subTotal : 0,
    Total : 0,
    Cerrar: ()=>{
        let subTotalPagar = producto.calcularCosto();
        document.write("SubTotal: "+ subTotalPagar);

        let totalPagar = subTotalPagar + (producto.calcularCosto()*0.16);
        document.write("Total a pagar: "+ totalPagar);

        document.write("Folio: " + folio())
    }
}

carrito.Cerrar();

function folio() {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result1= ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < num; i++ ) {
        result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return carrito.folio;
 
}
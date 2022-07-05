let miCompra = []
const productos = [
    {id: 1, nombre: "producto1", precio: 5000},
    {id: 2, nombre: "producto2", precio: 10000},
    {id: 3, nombre: "producto3", precio: 15000}
]

function mostrarMenuProductos(){
    let idElegido = prompt("Escriba el id del producto elegido. Para salir ingrese (ESC): \n Producto 1: id=1 \n Producto 2: id=2 \n Producto 3: id=3 \n Una vez que haya finalizado escriba `TOTAL` para conocer el precio final de su compra \n")
    return idElegido 
}

function cantidadProductos(){
    let cantidadProductos = prompt("Escriba el número de unidades que desea")
    return cantidadProductos
}

function totalProducto1(){
    let unidades = prompt("Escriba el numero de unidades de Producto1 que desea: ")
    return miCompra.push(productos[0].precio*unidades)
}

function totalProducto2(){
    let unidades = prompt("Escriba el numero de unidades de Producto2 que desea: ")
    return miCompra.push(productos[1].precio*unidades)
}

function totalProducto3(){
    let unidades = prompt("Escriba el numero de unidades de Producto1 que desea: ")
    return miCompra.push(productos[2].precio*unidades)
}

function totalProductos(){
    let total = miCompra.reduce((acc, el) => acc + el, 0)
    return total
}

function carritoCompras(){
    let idElegido = mostrarMenuProductos()

    while(idElegido !== "ESC" && idElegido !== ""){
        if (idElegido == 1){
            totalProducto1()
        }
        else if(idElegido == 2){
            totalProducto2()
        }
        else if(idElegido == 3){
            totalProducto3()
        }
        else if(idElegido == "TOTAL"){
            let total = totalProductos()
            alert("El total es $" + total)
            break
        }
        else{
            alert("Debe elegir alguno de los id del listado")
        }
        idElegido = mostrarMenuProductos()
    }
}

carritoCompras()
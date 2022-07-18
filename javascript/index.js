class Producto {
    constructor(id, nombre, precioProducto, imagen){
        this.id = id
        this.nombre = nombre
        this.precioProducto = precioProducto
        this.imagen = imagen
    }
}

class ProductoCompra {
    constructor(id, nombre, precioProducto, unidades, totalProducto){
        this.id = id
        this.nombre = nombre
        this.precioProducto = precioProducto
        this.unidades = unidades
        this.totalProducto = precioProducto * unidades
    }
}


let catalogoProductos = []
let producto1 = new Producto(1, "producto1", 20000, "imagenProducto1.jpg")
let producto2 = new Producto(2, "producto2", 21000, "imagenProducto2.jpg")
let producto3 = new Producto(3, "producto3", 24000, "imagenProducto3.jpg")

catalogoProductos.push(producto1)
catalogoProductos.push(producto2)
catalogoProductos.push(producto3)

const productos = []
let productoACargar =[]
let tabla
let textoTotalCompra

function inicializarElementos() {
    tabla = document.getElementById("tabla-productos")
    textoTotalCompra = document.querySelector("#totalCompra span")
}

let idDatoFormulario = document.getElementById("inputIdProducto").value
let unidadesFormulario = document.getElementById("inputUnidades").value

function inicializarElementos() {
    tabla = document.getElementById("tabla-productos");
    textoTotalCompra = document.querySelector("#totalCompra");
}

let formulario = document.getElementById("formulario")

formulario.onsubmit = (event) => agregarAlCarrito(event)

function agregarAlCarrito(event) {
    event.preventDefault()

    if (idDatoFormulario == 1) {
        let agregarId = productoACargar.push(1)
        let agregarNombre = productoACargar.push(catalogoProductos[0].nombre)
        let agregarPrecio = productoACargar.push(catalogoProductos[0].precioProducto)
        let agregarUnidades = productoACargar.push(unidadesFormulario)
        let total = productoACargar.push(agregarPrecio * agregarUnidades)
        let productoARegistrar = new Producto(
            agregarId,
            agregarNombre,
            agregarPrecio,
            agregarUnidades,
            total
        )
        productoACargar.push(productoARegistrar)
    }
    else if (idDatoFormulario == 2) {
        let agregarId = productoACargar.push(2)
        let agregarNombre = productoACargar.push(catalogoProductos[1].nombre)
        let agregarPrecio = productoACargar.push(catalogoProductos[1].precioProducto)
        let agregarUnidades = productoACargar.push(unidadesFormulario)
        let total = productoACargar.push(agregarPrecio * agregarUnidades)
        let productoARegistrar = new Producto(
            agregarId,
            agregarNombre,
            agregarPrecio,
            agregarUnidades,
            total
        )
        productoACargar.push(productoARegistrar)
    }
    else if (idDatoFormulario == 3) {
        let agregarId = productoACargar.push(3)
        let agregarNombre = productoACargar.push(catalogoProductos[2].nombre)
        let agregarPrecio = productoACargar.push(catalogoProductos[2].precioProducto)
        let agregarUnidades = productoACargar.push(unidadesFormulario)
        let total = productoACargar.push(agregarPrecio * agregarUnidades)
        let productoARegistrar = new Producto(
            agregarId,
            agregarNombre,
            agregarPrecio,
            agregarUnidades,
            total
        )
        productoACargar.push(productoARegistrar)
    }
}


function agregarProductosTabla() {
    
    productoACargar.forEach( (producto) => {
        let filaTabla = document.createElement("tr")
        filaTabla.innerHTML = `
        <td> ${productoACargar[0]}</td>
        <td> ${productoACargar[1]}</td>
        <td> ${productoACargar[2]}</td>
        <td> ${productoACargar[3]}</td>
        <td> ${productoACargar[3]}</td>

        `
        tabla.tBodies[0].append(filaTabla)
    })
}

function calcularTotales() {

}

function costoEnvio() {
    if (totalFinal > 10000){
        let mensajeEnvio = "Envío gratis"
    }
    else {
        let mensajeEnvio = "Deberá abonar $800 de envío"
    }
}
function main() {
    inicializarElementos()
    agregarAlCarrito()
    agregarProductosTabla()
}

main()

class Producto {
    constructor(id, nombre, precioProducto, imagen){
        this.id = id
        this.nombre = nombre
        this.precioProducto = precioProducto
        this.imagen = imagen
    }
}

class ProductoCompra {
    constructor(idCompra, nombreCompra, precioProductoCompra, unidadesCompra){
        this.idCompra = idCompra
        this.nombreCompra = nombreCompra
        this.precioProductoCompra = precioProductoCompra
        this.unidadesCompra = unidadesCompra
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
const totalFinalProductos = []
let productoACargar =[]
let tabla
let textoTotalCompra

function inicializarElementos() {
    tabla = document.getElementById("tabla-productos")
    textoTotalCompra = document.querySelector("#totalCompra span")
}

let idDatoFormulario = inputIdProducto.value
let unidadesFormulario = inputUnidades.value

let formulario = document.getElementById("formulario")

formulario.onsubmit = (event) => agregarAlCarrito(event)

function agregarAlCarrito(event) {
    event.preventDefault()

    if (idDatoFormulario == 1) {
        let idCompra = productoACargar.push(idDatoFormulario)
        let nombreCompra = productoACargar.push(catalogoProductos[0].nombre)
        let precioProductoCompra = productoACargar.push(catalogoProductos[0].precioProducto)
        let unidadesCompra = productoACargar.push(unidadesFormulario)
        
        let productoARegistrar = new ProductoCompra(
            idCompra,
            nombreCompra,
            precioProductoCompra,
            unidadesCompra,
        )
        productoACargar.push(productoARegistrar)
        
    }
    else if (idDatoFormulario == 2) {
        let idCompra = productoACargar.push(idDatoFormulario)
        let nombreCompra = productoACargar.push(catalogoProductos[1].nombre)
        let precioProductoCompra = productoACargar.push(catalogoProductos[1].precioProducto)
        let unidadesCompra = productoACargar.push(unidadesFormulario)
        
        let productoARegistrar = new ProductoCompra(
            idCompra,
            nombreCompra,
            precioProductoCompra,
            unidadesCompra,
        )
        productoACargar.push(productoARegistrar)
                
    }
    else if (idDatoFormulario == 3) {
        let idCompra = productoACargar.push(idDatoFormulario)
        let nombreCompra = productoACargar.push(catalogoProductos[2].nombre)
        let precioProductoCompra = productoACargar.push(catalogoProductos[2].precioProducto)
        let unidadesFormulario = productoACargar.push(unidadesFormulario)
        
        let productoARegistrar = new ProductoCompra(
            idCompra,
            nombreCompra,
            precioProductoCompra,
            unidadesCompra,
        )
        productoACargar.push(productoARegistrar)
        
    }
    totalFinalProductos.push(precioProductoCompra*unidadesCompra)
    formulario.reset()
}


function agregarProductosTabla() {
    productoACargar.forEach( (producto) => {
        let filaTabla = document.createElement("tr")
        filaTabla.innerHTML = `
        <td> ${productoACargar[0]}</td>
        <td> ${productoACargar[1]}</td>
        <td> ${productoACargar[2]}</td>
        <td> ${productoACargar[3]}</td>
        <td> ${productoACargar[2]*productoACargar[3]}</td>
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

class Producto {
    constructor(id, nombre, precioProducto, imagen){
        this.id = id
        this.nombre = nombre
        this.precioProducto = precioProducto
        this.imagen = imagen
    }
}

class ProductoCompra {
    constructor(idCompra, nombreCompra, precioProductoCompra, unidadesCompra, precioTotalCompra){
        this.idCompra = idCompra
        this.nombreCompra = nombreCompra
        this.precioProductoCompra = precioProductoCompra
        this.unidadesCompra = unidadesCompra
        this.precioTotalCompra = precioTotalCompra
    }
}


let catalogoProductos = []
let producto1 = new Producto(1, "producto1", 10000, "./multimedia/productos/producto1.jpg")
let producto2 = new Producto(2, "producto2", 20000, "./multimedia/productos/producto2.jpg")
let producto3 = new Producto(3, "producto3", 50000, "./multimedia/productos/producto3.jpg")

catalogoProductos.push(producto1)
catalogoProductos.push(producto2)
catalogoProductos.push(producto3)

const productos = []
const productosTemporal = []
const totalFinalProductos = []
let productoACargar 

let tabla = document.getElementById("tabla-productos")
let textoTotalCompra = document.querySelector("#totalCompra span")


let idDatoFormulario = document.getElementById("inputIdProducto")
let unidadesFormulario = document.getElementById("inputUnidades")
let formulario = document.getElementById("formulario")

let cardsDiv = document.querySelector("#cards")

function inicializarEventos() {
formulario.addEventListener("submit", agregarAlCarrito)
}

catalogoProductos.forEach(producto => {
    cardsDiv.innerHTML += renderCard(producto)
})

function renderCard(producto) {
    let cardRendered = `
    <div class="card m-3" style="width: 18rem;">
        <img class="card-img-top" src="${producto.imagen}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${producto.id}.  ${producto.nombre}</h5>
            <p class="card-text">$${producto.precioProducto}</p>
            <a href="#" class="btn btn-primary botonDeCompra" id="${producto.id}">Agregar al carrito</a>
        </div>
    </div>
    `
    return cardRendered
}

function calcularTotal(){
    let total = 0
    for(let i = 0; i < productos.lenght; i++){
        total = total + productos[i].precioTotalProducto
    }
    return total
}

let botones = document.querySelectorAll(".botonDeCompra")
let arrayDeBotones = Array.from(botones)
arrayDeBotones.forEach(boton => {
    boton.addEventListener("click", (e) => {
        let productoSeleccionado = catalogoProductos.find(producto => producto.id === e.target.id)

    })
})

function agregarAlCarrito(event) {
    
    event.preventDefault()
    const idBuscado = parseInt(idDatoFormulario.value)
    const productoBuscado = catalogoProductos.find(producto => producto.id === idBuscado)
    let nombreBuscado = productoBuscado.nombre
    let precioBuscado = productoBuscado.precioProducto
    let unidadesBuscado = parseInt(unidadesFormulario.value)
    let precioTotalProducto = precioBuscado*unidadesBuscado
    productoACargar = new ProductoCompra(idBuscado, nombreBuscado, precioBuscado, unidadesBuscado, precioTotalProducto)
    productos.push(productoACargar)
    formulario.reset()
    limpiarTabla()
    agregarProductosTabla()
    console.log(productos)
}

function agregarProductosTabla() {
    productos.forEach( (producto) => {
        let filaTabla = document.createElement("tr")
        filaTabla.innerHTML = `
        <td> ${producto.idCompra}</td>
        <td> ${producto.nombreCompra}</td>
        <td> ${producto.precioProductoCompra}</td>
        <td> ${producto.unidadesCompra}</td>
        <td> ${producto.precioTotalCompra}</td>
        `
        tabla.tBodies[0].append(filaTabla)
    })
}

function limpiarTabla() {
    while(tabla.rows.length>1){
        tabla.deleteRow(1)
    }
}

function main(){
    // inicializarElementos()
    inicializarEventos()
}

main()


document.addEventListener('DOMContentLoaded')

const fetchData = async () => {
    try {
        const res = await fetch('api.json')
        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

class Producto {
    constructor(id, nombre, precioProducto, imagen){
        this.id = id
        this.nombre = nombre
        this.precioProducto = precioProducto
        this.imagen = imagen
    }
}

class ProductoCompra {
    // constructor(idCompra, nombreCompra, precioProductoCompra, unidadesCompra, precioTotalCompra){
    //     this.idCompra = idCompra
    //     this.nombreCompra = nombreCompra
    //     this.precioProductoCompra = precioProductoCompra
    //     this.unidadesCompra = unidadesCompra
    //     this.precioTotalCompra = precioTotalCompra
    // }
    constructor(idCompra, nombreCompra, precioProductoCompra, unidadesCompra, precioTotalCompra){
        this.idCompra = idCompra
        this.nombreCompra = nombreCompra
        this.precioProductoCompra = precioProductoCompra
        this.unidadesCompra = unidadesCompra
        this.precioTotalCompra = precioTotalCompra
    }

}




let catalogoProductos = []
let producto1 = new Producto(1, "JW Double Black", 10000, "./multimedia/productos/producto1.jpg")
let producto2 = new Producto(2, "JW Gold", 20000, "./multimedia/productos/producto2.jpg")
let producto3 = new Producto(3, "JW Blue", 50000, "./multimedia/productos/producto3.jpg")

catalogoProductos.push(producto1)
catalogoProductos.push(producto2)
catalogoProductos.push(producto3)

const datosClienteFacturacion = []
let productos = []
const productosTemporal = []
let totalFinalProductos = []
let productoACargar 

let tabla = document.getElementById("tabla-productos")
let textoTotalCompra = document.querySelector("#totalCompra span")


let idDatoFormulario = document.getElementById("inputIdProducto")
let unidadesFormulario = document.getElementById("inputUnidades")
let formulario = document.getElementById("formulario")

let cardsDiv = document.querySelector("#cards")

function inicializarEventos() {
// formulario.addEventListener("submit", agregarAlCarrito)

}

let botones = document.querySelectorAll(".botonDeCompra")
let arrayDeBotones = Array.from(botones)
arrayDeBotones.forEach(boton => {
    boton.addEventListener("click", (e) => {
        console.log(e.target.id)
        // let productoSeleccionado = catalogoProductos.find(producto => producto.id === e.target.id)

    })
})

catalogoProductos.forEach(producto => {
    cardsDiv.innerHTML += renderCard(producto)
})

function renderCard(producto) {
    let cardRendered = `
    <div class="card m-3" style="width: 18rem;">
        <img class="card-img-top img-fluid" src="${producto.imagen}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">id: ${producto.id} <br> ${producto.nombre}</h5>
            <p class="card-text">$${producto.precioProducto}</p>
            <div class="row">
                <div class="col-7 my-2">
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Unidades</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
            </div>
            <a href="#" class="btn btn-primary botonDeCompra" id="${producto.id}">Agregar al carrito</a>
        </div>
    </div>
    `
    return cardRendered
}


function calcularTotal(){
    let totalFinal = totalFinalProductos.reduce((acumulador, elemento)=> acumulador + elemento, 0)
    textoTotalCompra.innerHTML = totalFinal
}



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
    almacenarProductosSessionStorage()
    totalFinalProductos.push(precioTotalProducto)
    almacenarTotalProductosSS()
    calcularTotal()
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

function almacenarTotalProductosSS(){
    sessionStorage.setItem("totalProductos", JSON.stringify(totalFinalProductos))
}

function obtenerTotalProductosSS(){
    let totalesProductos = sessionStorage.getItem("totalProductos")
    if (totalesProductos !== null) {
        totalFinalProductos = JSON.parse(totalesProductos)
    }
    let totalFinal = totalFinalProductos.reduce((acumulador, elemento)=> acumulador + elemento, 0)
    textoTotalCompra.innerHTML = totalFinal
}

function almacenarProductosSessionStorage() {
    sessionStorage.setItem("listaProductosCarrito", JSON.stringify(productos))
}

function obtenerProductosSessionStorage() {
    // let productosEnCarrito = sessionStorage.getItem("listaProductosCarrito")
    let productos = sessionStorage.getItem("listaProductosCarrito") !== null && JSON.parse(productosEnCarrito)
    // if (productosEnCarrito !== null) {
    //     productos = JSON.parse(productosEnCarrito)
    // }
}

function limpiarTabla() {
    while(tabla.rows.length>1){
        tabla.deleteRow(1)
    }
}

function main(){
    // inicializarElementos()
    inicializarEventos()
    obtenerProductosSessionStorage()
    obtenerTotalProductosSS()
    agregarProductosTabla()
}

main()


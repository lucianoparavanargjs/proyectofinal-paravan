class Producto {
    constructor(id, nombre, imagen, precioProducto) {
        this.id = id
        this.nombre = nombre
        this.imagen = imagen
        this.precioProducto = precioProducto
    }
}

class Carrito {
    constructor(id) {
        this.id = id;
        this.productos = []
    }

    calcularTotal() {
        let total = 0
        for(let i = 0; i < this.productos.length; i++) {
            total = total + this.productos[i].precioKilo
        }
        return total
    }

}

function renderCard(producto) {
    let cardRendered = `    
    <div class="card m-3" style="width: 18rem;">
        <img src="./images/${producto.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${producto.id}.${producto.nombre}</h5>
            <p class="card-text">$ ${producto.precioProducto}</p>
            <a href="#" class="btn btn-primary botonDeCompra" id="${producto.id}">Agregar al carrito</a>
        </div>
    </div>
    `
    return cardRendered
}

function actualizarCarrito(carrito) {
    let divCarrito = document.querySelector("#carrito")
    carrito.productos.forEach(producto => {
        divCarrito.innerHTML += renderCard(producto)
    })
    divCarrito.innerHTML += `<h1>Precio Total: $ ${carrito.calcularTotal()}</h1>`
}

let catalogoProductos = [];
let producto1 = new Producto(1, "producto1", "adidas1.jpg", 20000)
let producto2 = new Producto(2, "producto2", "adidas2.jpg", 25000)
let producto3 = new Producto(3, "producto3", "adidas3.jpg", 27000)

catalogoProductos.push(producto1)
catalogoProductos.push(producto2)
catalogoProductos.push(producto3)

let cardsDiv = document.querySelector("#cards")
catalogoProductos.forEach(producto => {
    cardsDiv.innerHTML += renderCard(producto)
})

let miFormulario = document.getElementById("formulario")
let formulario = document.getElementById("formulario")
let inputNombre = document.getElementById("inputIdProducto")
let inputCantidad = document.getElementById("inputCantidad")

let productos = []

formulario.onsubmit = (event) => validarFormulario(event)

function validarFormulario(event) {
    event.preventDefault()
    console.log(event.target)
    let id = inputIdProducto.value
    let cantidad = parseInt(inputCantidad.value)
    let precioUnitario
    if (id == 1){
        precioUnitario = 20000
    }
    else if(idElegido == 2){
        precioUnitario = 25000
    }
    else if(idElegido == 3){
        precioUnitario = 27000
    }
    let totalPrecio = cantidad * precioUnitario
  
    let producto = new Productos(
      id,
      cantidad,
      totalPrecio,
    )

    productos.push(producto);
  
    formulario.reset();

  console.log(inputIdProducto.value);
  console.log(inputCantidad.value);
  console.log(productos);
}
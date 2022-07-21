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
let producto1 = new Producto(1, "producto1", 20000, "imagenProducto1.jpg")
let producto2 = new Producto(2, "producto2", 21000, "imagenProducto2.jpg")
let producto3 = new Producto(3, "producto3", 24000, "imagenProducto3.jpg")

catalogoProductos.push(producto1)
catalogoProductos.push(producto2)
catalogoProductos.push(producto3)

const productos = []
const totalFinalProductos = []
let productoACargar 

let tabla = document.getElementById("tabla-productos")
let textoTotalCompra = document.querySelector("#totalCompra span")


let idDatoFormulario = document.getElementById("inputIdProducto")
let unidadesFormulario = document.getElementById("inputUnidades")
let formulario = document.getElementById("formulario")

function inicializarEventos() {
formulario.addEventListener("submit", agregarAlCarrito)
formulario.addEventListener("submit", agregarProductosTabla)
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
}

function agregarProductosTabla() {
    productos.forEach( (producto) => {
        let filaTabla = document.createElement("tr")
        filaTabla.innerHTML = `
        <td> ${productoACargar.idCompra}</td>
        <td> ${productoACargar.nombreCompra}</td>
        <td> ${productoACargar.precioProductoCompra}</td>
        <td> ${productoACargar.unidadesCompra}</td>
        <td> ${productoACargar.precioTotalCompra}</td>
        `
        tabla.tBodies[0].append(filaTabla)
    })
}

function limpiarTabla() {
    while(tabla.rows.lenght>1){
        tabla.deleteRow(1)
    }
}

// inicializarElementos()
inicializarEventos()
// }

// main()

// main()

    // console.log(productoBuscado)
    // if (idDatoFormulario == 1) {
    //     let idCompra = productoACargar.push(idDatoFormulario)
    //     let nombreCompra = productoACargar.push(catalogoProductos[0].nombre)
    //     let precioProductoCompra = productoACargar.push(catalogoProductos[0].precioProducto)
    //     let unidadesCompra = productoACargar.push(unidadesFormulario)
        
    //     let productoARegistrar = new ProductoCompra(
    //         idCompra,
    //         nombreCompra,
    //         precioProductoCompra,
    //         unidadesCompra,
    //     )
    //     productoACargar.push(productoARegistrar)
        
    // }
    // else if (idDatoFormulario == 2) {
    //     let idCompra = productoACargar.push(idDatoFormulario)
    //     let nombreCompra = productoACargar.push(catalogoProductos[1].nombre)
    //     let precioProductoCompra = productoACargar.push(catalogoProductos[1].precioProducto)
    //     let unidadesCompra = productoACargar.push(unidadesFormulario)
        
    //     let productoARegistrar = new ProductoCompra(
    //         idCompra,
    //         nombreCompra,
    //         precioProductoCompra,
    //         unidadesCompra,
    //     )
    //     productoACargar.push(productoARegistrar)
                
    // }
    // else if (idDatoFormulario == 3) {
    //     const prueba = catalogoProductos.find(producto => producto.id === 3)
    //     console.log(prueba)
    //     // let idCompra = productoACargar.push(idDatoFormulario)
    //     // let nombreCompra = productoACargar.push(catalogoProductos[2].nombre)
    //     // let precioProductoCompra = productoACargar.push(catalogoProductos[2].precioProducto)
    //     // let unidadesFormulario = productoACargar.push(unidadesFormulario)
        
    //     // let productoARegistrar = new ProductoCompra(
    //     //     idCompra,
    //     //     nombreCompra,
    //     //     precioProductoCompra,
    //     //     unidadesCompra,
    //     // )
    //     // productoACargar.push(productoARegistrar)
        
    // }
    // console.log(totalFinalProductos)
    // totalFinalProductos.push(precioProductoCompra*unidadesCompra)
    // formulario.reset()





// function calcularTotales() {
    
// }

// function costoEnvio() {
//     if (totalFinal > 10000){
//         let mensajeEnvio = "Envío gratis"
//     }
//     else {
//         let mensajeEnvio = "Deberá abonar $800 de envío"
//     }
// }


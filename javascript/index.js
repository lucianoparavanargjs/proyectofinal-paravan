/*let entrada = prompt("Ingresar un número: ");

while(entrada != "ESC"){
    alert("El usuario ingresó el número: " + entrada);
    
    entrada = prompt("Ingresar un número: ")
}
*/

let precioProdUno = 5000
let precioProdDos = 10000
let precioProdTres = 15000

function mostrarMenu(){
    let opcion = prompt("Ingrese el numero de la opción elegida. Para salir ingrese (ESC): \n 1. Producto 1 \n 2. Producto 2 \n 3. Producto 3 \n")
    return opcion
}

function tresCuotas(precio){
    let resultado = precio*1.10/3
    return resultado
}

function seisCuotas(precio){
    let resultado = precio*1.20/6
    return resultado
}

function doceCuotas(precio){
    let resultado = precio*1.40/12
    return resultado
}

function mostrarResultado(resultado){
    alert("Se deberá abonar $"+ resultado +" por mes.")
}


let cuotas = 0

function financiacion(){
    let opcionSeleccionada = mostrarMenu()

    while(opcionSeleccionada !== "ESC" && opcionSeleccionada !== ""){
        if (opcionSeleccionada == 1){
            let cuotas = prompt("Desea pagar en 3, 6 o 12 cuotas? Ingrese el número:")

            cuotas = parseInt(cuotas)

            switch(cuotas){
                case 3:
                    let resultadoPrecio3 = tresCuotas(precioProdUno);
                    mostrarResultado(resultadoPrecio3);
                    break;
                    
                case 6:
                    let resultadoPrecio6 = seisCuotas(precioProdUno);
                    mostrarResultado(resultadoPrecio6);
                    break;

                case 12:
                    let resultadoPrecio12 = doceCuotas(precioProdUno);
                    mostrarResultado(resultadoPrecio12);
                    break;
                
                default:
                    alert("Opcion incorrecta");
                    break;
            }
        }
        else if (opcionSeleccionada == 2){
            let cuotas = prompt("Desea pagar en 3, 6 o 12 cuotas? Ingrese el número:")

            cuotas = parseInt(cuotas)

            switch(cuotas){
                case 3:
                    let resultadoPrecio3 = tresCuotas(precioProdDos);
                    mostrarResultado(resultadoPrecio3);
                    break;
                    
                case 6:
                    let resultadoPrecio6 = seisCuotas(precioProdDos);
                    mostrarResultado(resultadoPrecio6);
                    break;

                case 12:
                    let resultadoPrecio12 = doceCuotas(precioProdDos);
                    mostrarResultado(resultadoPrecio12);
                    break;
                
                default:
                    alert("Opcion incorrecta");
                    break;
            }
        }
        else if (opcionSeleccionada == 3){
            let cuotas = prompt("Desea pagar en 3, 6 o 12 cuotas? Ingrese el número:")

            cuotas = parseInt(cuotas)

            switch(cuotas){
                case 3:
                    let resultadoPrecio3 = tresCuotas(precioProdTres);
                    mostrarResultado(resultadoPrecio3);
                    break;
                    
                case 6:
                    let resultadoPrecio6 = seisCuotas(precioProdTres);
                    mostrarResultado(resultadoPrecio6);
                    break;

                case 12:
                    let resultadoPrecio12 = doceCuotas(precioProdTres);
                    mostrarResultado(resultadoPrecio12);
                    break;
                
                default:
                    alert("Opcion incorrecta");
                    break;
            }
        }
        else{
            alert("Debe elegir la opción 1, 2 o 3")
        }
        opcionSeleccionada = mostrarMenu()
    }
}

financiacion()
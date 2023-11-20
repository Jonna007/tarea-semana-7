/*Desarrollar una función que realice la multiplicación utilizando 
únicamente sumas. La función recibe como parámetros el multiplicador 
y el multiplicando, utiliza un bucle para realizar sumas sucesivas 
y devolver el resultado. */

function multiplicacionConSumas (multiplicador, multiplicando)
 {
    let resultado = 0 ;
    for (let i = 0; i < multiplicador; i++) 
    {
        resultado += multiplicando;
    }
    return resultado;
}

// Variables 

let multiplicador = 20 ;
let multiplicando = 10 ;
let resultado = multiplicacionConSumas (multiplicador, multiplicando);

alert (resultado);


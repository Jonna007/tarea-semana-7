
/* Escribe una funcion que reciba el año
   de nacimiento como argumento y muestre en 
   un alert la edad correspondiente */

   function determinarEdad() 
   {
    // Solicitar al usuario su año de nacimiento
    let añoNacimiento = prompt("Ingresa tu año de nacimiento:");
   
    {
        // Obtener el año actual
        let añoActual = new Date().getFullYear();

        // Calcular la edad
        let edad = añoActual - añoNacimiento;

        // Mostrar la edad en un alert
        alert("Tu edad es: " + edad);
    }
}

// Llamar a la función para solicitar y mostrar la edad
determinarEdad();

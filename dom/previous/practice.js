// Hacer una funcion
// Que controle el flujo de entrada de una discoteca

/**
 * @function control de flujo de discoteca
 * Tiene que recibir una edad del cliente
 * y la edad minima para entrar
 * La funcion va a evaluar si la edad
 * del cliente es mayor que la edad minima para entrar
 * y va a imprimir bienvenido, si es mayor
 * y si no va a imprimir rechazado
 */

// camelCase
// unoDosTresCuatro

// Declaracion de la funcion
function accessValidator(userAge, minAge) {
  // Gracias Juan <3
  if (userAge >= minAge) {
    console.log("Bienvenido mi pana");
  } else {
    // Gracias Ana
    console.log("Vete pa tu casa menor");
  }
}

// const nombre = "juan";
// // Va a tomar una accion dependiendo del caso
// // Muy muy poco utilizado
// switch (nombre) {
//   case "octavio":
//     console.log("hola octavio");
//     break;
//   case "juan":
//     console.log("Hola juan");
//     break;
//   default:
//     console.log("Hola persona");
//     break;
// }

// Loops o Bucles

// While
let edadUsuario = 10;
// Se va a ejecutar
while (edadUsuario < 60) {
  accessValidator(edadUsuario, 18);
  edadUsuario = edadUsuario + 1; // 11, 12, 13, ..., 60
}

let contador = 0;
while (contador < 100) {
  console.log(contador, "Missisipi");
  contador = contador + 1; // Una salida
}

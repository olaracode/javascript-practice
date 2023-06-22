/**
 * Los loops en general se usan para repetir muchas veces la misma operacion
 * while y el for/for in/for of/forEach
 *
 * While: nos permite repetir la misma operacion mientras una condicion se cumpla
 *
 */

let start = true; // true: verdadero
// mientras (sea verdadero) ejecuta el siguiente bloque
let number = 0;
// while (number < 21) {
//   console.log("hola", number);
//   number += 1;
// }

/**
 * Ya se sabe el tamaño o la cantidad
 * de veces que hay que ejecutar el fragmento
 */

// for(comienza en; hasta que; actualiza la condicion)
// i = i + 1;

// El scope y/o alcance
// con let defino i dentro del bloque for

// variables universales
const urlDelProveedor = "https://localhost:3000";

// variables locales
// i = i + 10
for (let i = 0; i < 300; i += 10) {
  // variable local i
  // console.log("Cada vez que tenga dudas voy a preguntar", i);
}

// posicion se le llama indice
// [0]

/**
 * En la programacion las listas comienzan desde la posicion 0
 * const names = [0: "jose", 1: "juan", 2: "ana", ...];
 */
const names = ["jose", "juan", "ana"];
/**
 * como imprimir un valor en especifico de un arreglo
 * arreglo[indice/posicion]
 * como es el orden de los arreglos
 * propiedad length de los arreglos
 *
 *
 * formula para conseguir el
 * ultimo elemento - names.length - 1
 */

// console.log(names[0]);
// console.log(names[names.length - 1]);

// indice = 0 porque quiero comenzar desde el primer elemento
// indice < names.length porque quiero
//que se repita el codigo mientas
// hayan elementos en el arreglo
// indice++

// llaves: {} Para indicar un bloque de codigo nuevo o un objeto

// for (letcondicion) { el codigo a ejecutar }
// if(condicion) {bloque a ejecutar}
// function(parametros) {bloque a ejecutar}
// while(condicion) {bloque a ejecutar}
for (let indice = 0; indice < names.length; indice++) {
  // console.log(`Hola ${names[indice]} como estas?`);
}

// for of
// for in

// iterar por arreglos / recorrer los arreglos
// for(let nombreSimgular of arreglo)
// for(let car of cars)
// for(let student of students)
console.log("FOR OF");
for (let name of names) {
  console.log(name);
}

// objecto = { llave: valor }
// { key: value }
const usuario = {
  username: "octavio",
  name: "octavio",
};

console.log("FOR IN");
// for{ let indice in arreglo }
for (let key in usuario) {
  console.log(key);
}

// arreglo.forEach((valor, indice) => { bloque de codigo })
names.forEach((value, indice) => {
  console.log(value, indice);
});

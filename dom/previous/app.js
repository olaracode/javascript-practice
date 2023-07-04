// DRY
// KISS

// son variables globales pero
const num1 = 10
const num2 = 20
const klfawe = "e6b3ee50ed.js"


// function suma(){
//   // se usan a nivel local
//   return num1 + num2;
// }

// la asignacion del resultado

// X snake_case kebbab-case
// function suma_dos(num1, num2){
//   return num1 + num2
// }

// PascalCase

// Nombre en ingles en camelCase
function addTwoNumbers(num1, num2){
  return num1 + num2
}
const sumados = addTwoNumbers(10, 20);


/**
 * ESTE VALOR NUNCA LO DEBEN CAMBIAR
 */
const FONT_AWESOME_LINK = "e6b3ee50ed.js"

const constVariable = "asdfasdf.js"

function carga_Funcion_List(kit){
  const kitLink = "https://kit.fontawesome.com/" + kit
  console.log(kitLink)
  // cosas con el dom...
  return kitLink;
}

// arrays siempre usar nombres plurales
const names = ["octavio", "jose", "ana", "juan"]
const dogs = ["brownie", "firulais", "princesa la pitbul"]
// for(let name of names){
//   console.log(name)
// }

function printAllElements(items){for(let item of items){console.log(item)}}


// recibe los valores externos por parametros
function acariaAlPerro(arrayOfDogs){
  for(let dog of arrayOfDogs){
    console.log("hola perro", dog)
  }
}

// se considera una funcion impura - usa valores sin recibirlos
function acariaAlPerro2(){
  for(let dog of dogs){
    console.log("hola perro", dog)
  }
}

function saluda(){
  console.log("hola")
}

printAllElements(names)
printAllElements(dogs)


acariaAlPerro(dogs)

saluda()

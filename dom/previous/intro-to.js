// Es el comando mas facil de todos los lenguajes

// console.log -> console es la consola y log es un comando de imprimir
// Console imprime hola mundo
// Es para ver informacion y buscar errores

console.log("Hello world!");

// Variables

// Es la forma en la que uno asigna un valor a un espacio de memoria

// edad que vale 26
// var en la actualidad no es utilizado
var edad = 26; // Scope o el alcance

// let y const
// let nos permite crar una variable que se pueda modificar

// let
let edadUsuario = 26;
edadUsuario = 30; // se modifica el valor a 30.

const urlDelServidor = "https://miSuperServidor.com/";
// const
// const nos permite crear una variable constante
// una variable cuyo valor no puede ser modificado
const alturaUsuario = 180;
// alturaUsuario = 20;

// TIPOS DE DATO

// Integer -> Entero
let numerico = 26;

// Float -> Numero decimal;
let flotantes = 1.266;

// String -> Cadena de caracters / o un texto
let string = "Hola que tal?";
let oracion = "26";

// Booleano -> true o false(verdadero o falso)
let booleano = false;

// null y undefined ->
let pasaporte = null; // Vale nada

let contador; // Dato no inicializado no tiene valor
let cedulaIdentidad = undefined; // Deberia o se espera que exista

// Objecto y el array -> El array o lista

// Un array es un grupo o lista de valores
// let edades = [""] ->
const estudiantes = ["Juan", "Jesus", "Pedro", "Jose", "Ana", "Ana"];

// Un array puede estar compuesto de x cantidad de elementos de x tipo de dato
const cositas = ["Perros", 10, false, "Hola", 1.25];

const cohortes = [
  ["Juan", "Jesus"],
  ["jose", "Ana"],
];
console.log("Arrays:", cohortes);

// Objeto
// En llave: valor. {}
/**
 * {
 *  llave: valor;,
 *  llave: valor,
 *  llave: valor
 * }
 */
const estudiante = {
  name: "Octavio",
  lastname: "Lara",
  perfil: {
    promedio: 0.9,
    grado: "Programacion",
    evaluaciones: [10, 0.6, 0.5, 0.1],
  },
};
const estudianteDos = {
  name: "Jose",
  lastname: "Morrone",
  perfil: {
    promedio: 18,
    grado: "Programacion",
    evaluaciones: [20, 18, 16, 17],
  },
};

console.log("Objeto: ", estudiante);

console.log(
  "Estimado",
  estudiante.name,
  "Ha sido reprobado en el curso:",
  estudiante.perfil.grado,
  "con una nota de:",
  estudiante.perfil.promedio
);

const misEstudiantes = [estudiante, estudianteDos];

// console.log("Arreglo de objetos", misEstudiantes);

// Operadores matematicos
// let numero1 = 10;
// let numero2 = 20;
// let resultadoSuma = numero1 + numero2; // 10 + 20
// console.log("Resultado suma:", resultadoSuma); // 30

// let resultadoResta = numero1 - numero2; // 10 - 20
// console.log("Resultado resta", resultadoResta);

// let resultadMultiplicacion = numero1 * numero2; // 10 X 20
// console.log("Resultado multiplicacion", resultadMultiplicacion);

// // Division
// let division = numero1 / numero2; // 10 / 20
// console.log("resultado division", division);

// // Modulo
// let divisionResto = numero1 % numero2;
// console.log("resultado division resto: ", divisionResto);

// const sumaString = 2 + "2"; // String
// console.log(sumaString);

// const restaString = 2 - "2"; // Numero
// console.log(restaString);

// const multiplicacionTexto = "hola" * 10;
// console.log(multiplicacionTexto); // Not A Number

// const sumaTexto = "hola" + " que tal"; // Concatenacion de texto
// console.log(sumaTexto);

// const sumaArray = estudiantes + ["hola"];
// console.log(sumaArray);

// Funciones
// Es una serie de comandos que la aplicacion va a ejecutar
// Las funciones pueden o no recibir valores
// Pueden o no retornar valores

/**
 * DRY:
 * Don't repeat yourself
 * KISS:
 * keep it stupid/simple
 */

// function nombreDeLaFuncion(){}
// La definición y la ejecución

// Definimos o declaramos la funcion
function saluda() {
  console.log("Hola como estas?");
}

// Ejecutamos la funcion con nombreDeLaFuncion()
// saluda();

// Parametros: son valores que acepta la funcion
function saludoPersonal(name) {
  // let nombre
  console.log("Hola", name);
}

// nombre = "Octavio"
saludoPersonal("Octavio");

// nombre = "Jose"
saludoPersonal("Jose");

// Juan
saludoPersonal("Juan");

// funcion llamada suma que recibe: numero y otro numero
// compilada
function add(num1, num2, num3) {
  console.log(num1 + num2 + num3); // suma los dos numeros
}

// add(num1 = 1, num2 = 2, num3 = 3)
add(1, 2, 3);

// add(num1 = 2, num2 = 2, num3 = 2)
add(2, 2, 2);

// Funciones anonimas o funciones flecha

// Funciones flecha -> interpretada
const resta = (num1, num2) => {
  console.log(num1 - num2);
};

resta(5, 3);

// Hoisting

// Controles de flujo
// Condicionales

// Has una funcion que si la edad es mayor a 18 años diga que puedes pasar
// Y si no que diga no puedes pasar

// un condicional
/**
 * if(condifion){
 *  Bloque positivo
 * }else {
 *  caso por defecto
 * }
 */

const age = 60;
// Si es mayor a 18
console.log("Booleano", age >= 60);
if (age >= 60) {
  console.log("No puedes entrar eres muy viejo");
} else if (age >= 18) {
  console.log("Puedes pasar"); // Siempre va a terminar aca
} else {
  console.log("Eres muy joven para entrar :(");
}

// Operadores Logicos
console.log("Comparacion", 2 == "2");
console.log("Comparacion de tipo", "2" === 2);
// > / < -> Mayor / menor
// == -> Igual(Compara valores)
// === -> Igual(Valores y tipo de datos)
// >= / <= -> Mayor o igual / Menor o igual
// && -> Y "esto y aquello"
// || -> Esto o aquello

// ! -> NO
// != -> Distinto(Valor)
// !== -> Distinto(Valor y tipo de dato)

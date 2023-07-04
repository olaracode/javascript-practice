// El viernes vamos a empezar React.js

// Calculadora sencilla
// Carusel

/**
 * Que al cargar la pagina se monte aleatoriamente una de las imagenes
 * Por cada imagen se cree un boton
 * Cuan le des click a un boton se cambie la imagen
 */

/**
 * 2 x input
 * 1 x select
 * 1 x button
 * 1 x b(el resultado)
 */

const inputNum1 = document.getElementById("num1");
const inputNum2 = document.getElementById("num2");
const select = document.getElementById("operador");
const button = document.getElementById("calcular");
const result = document.getElementById("result");
const resetButton = document.getElementById("reset")

let num1 = 0;
let num2 = 0;
let operador = "/";

// Primer Input un evento que registre el cambio y actualice la variable num1
// e/event
inputNum1.addEventListener("change", (event) => {
  num1 = event.target.value; // e.target.value -> le llega al valor del input
});

inputNum2.addEventListener("change", (e) => {
  num2 = e.target.value;
});

select.addEventListener("change", (e) => {
  operador = e.target.value;
});

button.addEventListener("click", () => {
  let operationResult = 0;
  switch (operador) {
    case "/":
      console.log(num1, num2)
      operationResult = num1 / num2;
      break;
    case "*":
      operationResult = num1 * num2;
      break;
    case "-":
      operationResult = num1 - num2;
      break;
    case "+":
      operationResult = num1 + num2;
      break;
  }
  console.log(operationResult);
  if (operationResult === Infinity || operationResult === NaN) {
    alert("Operacion invalida");
    result.innerText = "eso no es posible compa";
    return;
  }
  result.innerText = operationResult;
});

resetButton.addEventListener("click", () => {
  num1 = 0;
  num2 = 0;
  inputNum1.value = 0;
  inputNum2.value = 0;
  result.innerText = 0;
})
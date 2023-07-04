console.log("hola mundo");

/**
 * @objetivo
 * Crear una aplicacion de calculadora
 * suma()
 * resta()
 * division()
 * multiplicacion()
 */

function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function division(a, b) {
  return a / b;
}

function multiplicacion(a, b) {
  return a * b;
}

function calculadora(a, b, operacion) {
  a = parseInt(a); // string -> number | NaN
  b = parseInt(b);
  operacion = parseInt(operacion);
  if (!operacion) {
    alert("La operacion tiene que ser 1,2,3 o 4");
    return; // culminar la funcion
  }
  if (operacion === 1) {
    return suma(a, b);
  } else if (operacion === 2) {
    return resta(a, b);
  } else if (operacion === 3) {
    return division(a, b);
  } else if (operacion === 4) {
    return multiplicacion(a, b);
  } else {
    alert("Hiciste algo chimbo chamo");
  }
}

function runCalculator() {
  let valor1 = prompt("Ingrese el primer valor");
  let valor2 = prompt("Ingrese el segundo valor:");
  let operacion = prompt(`
  Ingresa la operacion:
  1. Suma
  2. Resta
  3. Division
  4. Multiplicacion
  `);
  console.log("Resultado", calculadora(valor1, valor2, operacion));
  const reUse = parseInt(prompt("Desea hacer otro calculo? 1: si y 2: no"));
  console.log(reUse);
  if (reUse === 1) {
    // recursividad
    runCalculator();
  } else {
    alert("Chao :(");
  }
}

runCalculator();

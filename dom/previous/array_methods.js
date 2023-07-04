// for, for of, for in, forEach

// EL for nos permite ejecutar una tarea x cantidad de veces
for (let i = 0; i < 10; i += 2) {
  console.log(i);
}

// el for of funciona para arreglos
const names = ["jose", "juan", "jose2", "jose3"];

for (let name of names) {
  console.log(name);
}

// el for in funciona para objetos
// { llave: valor }
const user = {
  name: "Jose",
  lastname: "Morrone",
  age: 18,
};

for (let llave in user) {
  console.log(llave);
}

// forEach funciona para arreglos

const apellido = "Perez";
// map nos permite recorrer un arreglo y retornar un arreglo nuevo
const nombresYApellidos = names.map((value, indice) => {
  return value + " " + apellido;
});

// filter array.filter((valor) => condicion)
const nombresFiltrados = names.filter((value, indice) => value === "jose");
console.log(nombresFiltrados);

// find array.find((valor) => condicion)
const juan = names.find((value) => value === "juan");
console.log(juan);

// con array.push(nuevoElemento) agregamos un elemento a la lista
const nuevoMiembro = "Pedro Perez";
names.push(nuevoMiembro);
console.log(names);

// array.unshift() // para agregar un elemento al principio
names.unshift("Ana Perez");
console.log(names);

// con array.pop eliminamos el ultimo elemento
names.pop();
console.log(names);

// splice(el indice, la cantidad que va a borrar)
names.splice(1, 2);
console.log(names);

// splice(indice, cantidad, lo_que_agregas)
names.splice(1, 0, "jose");
console.log(names);

// splice para reemplazar
names.splice(1, 1, "jose1");
console.log(names);

// slice(indiceInicio, indiceFinal) // no es inclusivo
const joses = names.slice(1, 3);
console.log(joses);

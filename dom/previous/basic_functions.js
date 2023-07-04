// fake names

const firstNames = ["jose", "juan", "pedro", "luis"];

const lastNames = ["Perez", "Rodriguez", "Martinez"];

// math.random y math.floor

// mathRandom nos da numeros aleatorios entre 0 y 1
// para conseguir un numero mayor lo multiplicamos por
// el rango
const randomNumber = Math.random() * 10;
console.log(randomNumber);

// Math.floor redondea hacia abajo
const floorInteger = Math.floor(randomNumber);
console.log(floorInteger);

const ceilInteger = Math.ceil(randomNumber);
console.log(ceilInteger);

// si >= 5 <= 5
const roundInteger = Math.round(randomNumber);
console.log(roundInteger);

// firstNames
// const randomIndex = Math.floor(Math.random() * firstNames.length);

// funcion que retorne un elemento aleatorio de un arreglo

// arreglo: parametro
function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);

  // retornando un valor
  return array[randomIndex];
}

function generateRandomNames(quantity, names, lastnames) {
  /**
   * @params
   * quantity: number -> la cantidad de nombres que vamos a crear
   * names: string[] -> el arreglo de nombres
   * lastnames: string[] -> el arreglo de apellidos
   */

  // una lista vacia
  let fullNames = [];
  for (let i = 0; i < quantity; i++) {
    const randomName = getRandomElement(names); // nombre
    const randomLastname = getRandomElement(lastnames); // apellido
    // agregamos un elementos al arreglo
    fullNames.push(`${randomName} ${randomLastname}`);
  }

  // retornamos el valor para poder almacenar y computar
  return fullNames;
}

const usuarios = generateRandomNames(100, firstNames, lastNames);

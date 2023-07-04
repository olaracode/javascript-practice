const cars = [
  { name: "Model S", brand: "Tesla", price: 80000 },
  { name: "Model 3", brand: "Tesla", price: 35000 },
  { name: "Model X", brand: "Tesla", price: 90000 },
  { name: "Model Y", brand: "Tesla", price: 40000 },
  { name: "Corolla", brand: "Toyota", price: 20000 },
  { name: "Camry", brand: "Toyota", price: 25000 },
  { name: "Prius", brand: "Toyota", price: 30000 },
  { name: "Accord", brand: "Honda", price: 28000 },
  { name: "Civic", brand: "Honda", price: 22000 },
  { name: "CR-V", brand: "Honda", price: 32000 },
  { name: "F-150", brand: "Ford", price: 40000 },
  { name: "Mustang", brand: "Ford", price: 35000 },
  { name: "Explorer", brand: "Ford", price: 45000 },
  { name: "Camaro", brand: "Chevrolet", price: 38000 },
  { name: "Impala", brand: "Chevrolet", price: 32000 },
  { name: "Equinox", brand: "Chevrolet", price: 28000 },
  { name: "Challenger", brand: "Dodge", price: 42000 },
  { name: "Charger", brand: "Dodge", price: 38000 },
  { name: "Durango", brand: "Dodge", price: 45000 },
  { name: "Wrangler", brand: "Jeep", price: 35000 },
];

// {
//   name: string,
//   brand: string,
//   price: number
// }

/**
 * Impriman todos los carros con un formato
 * Modelo: name, Marca: brand, Precio: price
 */

function imprimeCarro(car) {
  console.log(`
  Modelo: ${car.name}
  Marca: ${car.brand}
  Precio: ${car.price}$
  `);
}

// Jose Carlos
function catalogo() {
  for (let car of cars) {
    imprimeCarro(car);
  }
}

// imprimeCatalogo();

// Juan
// function
function filtraMarca(marca) {
  // marca es la marca que usamos
  for (let car of cars) {
    //car.brand es la marca del carro
    if (car.brand === marca) {
      imprimeCarro(car);
    }
  }
}

// filtraMarca("Chevrolet");

// Lo siguiente es que quiere aplicar un descuento del 30% a los carros chevrolet
/**
 * Funcion que va a imprimir los carros
 * y a los carros de marca x tengan un
 * descuento les va a imprimir un descuento
 */

// function nombreFuncion(parametro = valor_por_defecto)
function applyDiscount(marca, porcentajeDescuento = 10) {
  for (let car of cars) {
    if (car.brand === marca) {
      // Calculamos el descuento usando: valor * porcentaje / 100
      const discount = (car.price * porcentajeDescuento) / 100;
      // car.price = car.price - discount
      console.log(`
      Modelo: ${car.name}
      Marca: ${car.brand}
      Precio: ${car.price}$
      Descuento: -${porcentajeDescuento}%
      Precio descontado: ${car.price - discount}$
      `);
    }
  }
}
applyDiscount("Chevrolet");
applyDiscount("Dodge", 20);

// applyDiscount("Dodge")

// DOM -> Document Object Model

// document.getElementById("id")
const mainElement = document.getElementById("app");
console.log(mainElement);

// document.getElementsByTagName("p")
const parrafos = document.getElementsByTagName("p");
console.log(parrafos);

// document.getElementsByClassName("la_clase")
const products = document.getElementsByClassName("product");
console.log(products);

// document.querySelector(id/class/etiqueta)
const producto = document.querySelector("div");
console.log(producto);

// document.querySelectorAll(id/class/etiqueta)
const listaGeneral = document.querySelectorAll("div");
console.log(listaGeneral);

producto.style.backgroundColor = "red";
producto.style.color = "yellow";

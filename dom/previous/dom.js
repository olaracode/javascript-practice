console.log("hola mundo")
/**
 * El dom es la manera que tiene javascript
 * de interactuar con el html y con el usuario
 */

const textoImportante = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, enim."

const mainElement = document.getElementById("root")

// creamos el nuevo elemento con la etiqueta p
const newElement = document.createElement("p")

// le agregamos el contenido
newElement.innerText = textoImportante;

// añadimos el elemento que creamos al dom
mainElement.appendChild(newElement)

// Eventos -> Programacion orientada a eventos

/**
 * evento: Es la forma que tiene el usuario de interactuar con la pagina
 * 
 * 
 * Pagina Estaticas: Es una pagina de lectura sin contenido dinamico
 * 
 * Paginas dinamicas: Es una pagina cargada de funcionalidad
 * 
 */
const buttonSaludar = document.getElementById("saludar")

// evento click: Es la accion de oprimir el boton izquierdo del raton
// Todos los elementos pueden llevar eventos

function saludar(){
  // De iniciar sesion, procesar una compra o cambiar el tema de la pagina
  console.log("hola que tal")
}

/*
con addEventListener() podemos agregar eventos al elemento
addEventListener(tipoEvento, laFuncionAEjecutar)
*/

// evento click, funcion saludar
buttonSaludar.addEventListener("click", saludar)



const buttonTheme = document.getElementById("theme")
console.log(buttonTheme)

function switchTheme(){
  // Preguntando si mi elemento main tiene la clase light_theme
  if(mainElement.className === "light_theme"){
    mainElement.className = "dark_theme" // cambiar por dark_theme
  }else{
    mainElement.className = "light_theme"
  }
}

buttonTheme.addEventListener("click", switchTheme)

const productElement = document.getElementById("producto")
let contadorDeVistas = 0;
// evento mouseenter -> detecta cuando el mouse entra en el elemento
productElement.addEventListener("mouseenter", () => {
  console.log("hola")
  productElement.style.border = "1px solid red"
  contadorDeVistas += 1;
})

productElement.addEventListener("mouseleave", () => {
  console.log("chao :(")
  productElement.style.border = ""
  console.log(contadorDeVistas)
})


// Controlar un input

const userInput = document.getElementById("usuario")
// (event) => 
let username = "";
// change -> registra el evento cuando se termino el cambio
userInput.addEventListener("change", (event) => {
  // event.target.value => el valor de lo que el usuario esta escribiendo
  username = event.target.value;
  console.log("tu nombre de usuario es:", username)
})

const passwordInput = document.getElementById("password")
let password = "";

// keyup: registra el evento cuando sueltas la tecla
// keydown: registra el evento cuando presionas la tecla
passwordInput.addEventListener("keydown", (event) => {
  password = event.target.value;
})

function login(username, password){
  console.log("Has loggeado con exito!", username, password)
}

const loginButton = document.getElementById("login")

loginButton.addEventListener("click", () => login(username, password))


// El dom no es algo que manejemos a diario.
/**
 * MULTIPARADIGMAS
 * Lenguaje orientado a eventos
 * Lenguaje orientado a components
 * Lenguaje orientado a objetos(menos comun)
 */
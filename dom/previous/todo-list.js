// OOP
// Java !== JavaScript

const todoList = [];

// 
const input = document.getElementById("input-todo");
const addButton = document.getElementById("add-todo");
const domTodoList = document.getElementById("todo-list");

let nuevaTarea = "";


// funcion generica que crea un elemento y le agrega contenido
function createElement(tag, content){
  const newElement = document.createElement(tag);
  newElement.innerText = content;
  return newElement;
}

// Single Responsability
function createDeleteButton(index){
  const deleteButton = createElement("button", "eliminar")
  deleteButton.addEventListener("click",() => {
    todoList.splice(index, 1) // Eliminamos el elemento
    renderList(todoList); // Volvemos a renderizar la lista actualizada
  })
  return deleteButton;
}

function renderList(list){
  // Reinicia la lista de html(ul)
  domTodoList.innerHTML = "";

  // index = indice
  list.forEach((element, index) => {
    let newElement = createElement("li", element)
    const deleteButton = createDeleteButton(index);
    newElement.appendChild(deleteButton)
    domTodoList.appendChild(newElement); // anexamos nuestro nuevo li a el ul
  })
}

function restartInput(){
  nuevaTarea = ""; // Reiniciando el input
  input.value = ""
}

input.addEventListener("change", (event) => {
  nuevaTarea = event.target.value;
})

addButton.addEventListener("click", () => {
  if(nuevaTarea === "") return;
  todoList.push(nuevaTarea); // agrego la nueva tarea a mi lista de tareas
  renderList(todoList);
  restartInput()
})
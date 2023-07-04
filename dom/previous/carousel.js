const rootElement = document.getElementById("root")


const myImages = ["/mac.png", "/mac2.png", "/mac3.png", "/mac4.png", "https://picsum.photos/200"]


// Un arreglo de objetos
const myProducts = [
  {
    src: "/mac.png",
    color: "#2e3641",
    name: "Midnight"
  },
  {
    src: "/mac2.png",
    color: "#f0e5d3",
    name: "Starlight"
  },
  {
    src: "/mac3.png",
    color: "#7d7e80",
    name: "SpaceGray"
  },
  {
    src: "/mac4.png",
    color: "#e3e4e6",
    name: "Silver"
  },
]

function getRandomElementFromArray(array){
  const randomPosition = Math.floor(Math.random() * array.length)
  return array[randomPosition]
}

// <img />
const imgElement = document.createElement("img")
imgElement.className = "product_image"
// <img src="elemento_random.png" />
const randomImg = getRandomElementFromArray(myProducts)
imgElement.src = randomImg.src

rootElement.appendChild(imgElement)

// Por cada imagen en myImages se cree un boton

myProducts.forEach((img, index) => {
  console.log(img)
  // Crear el boton
  const btn = document.createElement("button");
  btn.innerText = img.name;
  btn.style.backgroundColor = img.color;
  // Agregar al boton un evento que cuando le des click cambie el src de la imagen
  btn.addEventListener("click", () => {
    imgElement.src = img.src;
    // imgElement.src = myImages[index];
  })
  rootElement.appendChild(btn);
})

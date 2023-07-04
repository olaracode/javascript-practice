// ARCHIVO malasPracticas.js escrito bien

const API_KEY_FONTAWESOME = "123456"; // NO se debe modificar

// aprobado tambien
let appUsers = [
  { name: "Jhon", age: 25, country: "Colombia", id: 1 },
  { name: "Yesica", age: 27, country: "Mexico", id: 2 },
  { name: "Camila", age: 28, country: "Argentina", id: 3 },
  { name: "Luisa", age: 28, country: "Colombia", id: 4 },
  { name: "Juan", age: 12, country: "Mexico", id: 5 }
];

// Aprobado por octavio
const userBankAccounts = [
  {
    ownerId: 1,
    balance: 100,
    date: "2020-01-01" 
  },
  { 
    ownerId: 2,
    balance: 200,
    date: "2020-01-01"
  },
  {
    ownerId: 3,
    balance: 300, 
    date: "2020-01-01"
  },
  {
    ownerId: 4,
    balance: 400,
    date: "2020-01-01"
  },
  {
    ownerId: 5,
    balance: 500,
    date: "2020-01-01"
  }
];

// del pana ramon(gracias) ft juan
function getUserNames(users){
  const names = users.map((user) => user.name);
  return names;
};

// ana P ft juan
function getUsersOverAge(users){
  const usersOverAge = users.filter((user) => user.age >= 18);
  return usersOverAge;
};


// Conectamos con la sudeban usando el id del usuario
// y filtramnos con los nuestro
// para retornar el balance
function getUserBalance(accounts, userId){
  /**
   * 
   * COMPUTOS BANCARIOS MISCELANEOS
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   */
  const userAccount = accounts.find((account) => account.ownerId === userId);
  return userAccount.balance;
}


const appUser = {
  name: "Octavio",
  id: 1,
  profile: {
    username: "olaracode",
    pais: "venezuela",
    lenguajeFavorito: "js"
  }
}


/**
 * Retorna el perfil del usuario si:
 * estas logeado, no es de venezuela y su lenguaje favorito no es javascript
 * si no esta loggeado:
 * no retorna nada
 * si es venezolano le dice no esta disponible en venezuela
 */
function userData(user, isLogged){
  if(isLogged){
    if(user.profile.pais !== "venezuela"){
      if(user.profile.lenguajeFavorito !== "js"){
        return user.profile
      } else {
        return "No aceptamos";
      }
    } else{
      return "No disponible en venezuela"
    }
  }else {
    return "Debes estar logeado"
  }
}
function getUserData(user, isLogged){
  if(!isLogged) return "Debes estar loggeado"; 
  if(user.profile.pais === "venezuela") return "No disponible en venezuela";
  if(user.profile.lenguajeFavorito === "js") return "No aceptamos desarrolladores web :("

  return user.profile;
}

// Operadores ternarios

const age = 18;
// condicion ? if : else
const puedePasar = age < 18 ? "No puede pasar" : "Puedes pasar";

console.log(puedePasar)

// KISS Keep it stupid simple / keep it simple, stupid


function numberIsDivisible(num){
  if(num <= 0) return "Number is not positive";
  if(num % 2 === 0 && num % 3 === 0) return "Divisible by 2 and 3"
  if(num % 2 === 0) return "Divisible by 2";
  if(num % 3 === 0) return "Divisible by 3";
  return "Not divisible by 2 or 3";
}
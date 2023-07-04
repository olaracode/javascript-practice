const appkey = "123456";

const users=[{name: "Jhon",age: 25,country: "Colombia",id:1},
  {  name: "Yesica", age: 27, country: "Mexico",id:2},
  {name: "Camila",age: 28,country: "Argentina",id:3},
  {name: "Luisa",age: 28,country: "Colombia",id:4},
  {    name: "Juan",age: 12,country: "Mexico",id:5},];


const acc = [
  {
    owner_id:1, amm:100, dt: "2020-01-01" 
  },
  {owner_id:2, amm:200, dt: '2020-01-01'
},
  {
    owner_id:3, amm:300, dt: '2020-01-01'
  },
  {
    owner_id:4, amm:400, dt: '2020-01-01'
  },
  {
    owner_id:5, amm:500, dt: '2020-01-01'
  },
];

const obtener_nombres_de_personas = () => {
  const y = names.map((item) => item.name);
  return y;
};

const obtenerpersonasmayores = (x) => {
  const y = x.filter((item) => item.age >= 18);
  return y;
};

function balance(){
  const userB = acc.find((item) => item.owner_id === 1);
  return userB.amm;
}

// funcion que obtiene el balance del segundo usuario
function balanceUser2(){
  // conseguimos la cuenta del usuario 2 en el array acc(accounts)
  const userB = acc.find((item) => item.owner_id === 2); // comparamos usando map
  // retornamos el balance del usuario 2
  return userB.amm;
}

const bus_usr = (x) => {
  const y = users.find((item) => item.id === x);
  return y;
}


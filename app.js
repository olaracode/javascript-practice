let empleados = [
  { name: "Alice", title: "Manager", hourly_rate: 50.0, worked_hours: 40 },
  { name: "Bob", title: "Developer", hourly_rate: 30.0, worked_hours: 50 },
  { name: "Charlie", title: "Designer", hourly_rate: 25.0, worked_hours: 35 },
  { name: "David", title: "Developer", hourly_rate: 30.0, worked_hours: 45 },
  { name: "Eve", title: "Manager", hourly_rate: 50.0, worked_hours: 40 },
  { name: "Frank", title: "Developer", hourly_rate: 30.0, worked_hours: 55 },
  { name: "Grace", title: "Designer", hourly_rate: 25.0, worked_hours: 40 },
  { name: "Henry", title: "Developer", hourly_rate: 30.0, worked_hours: 50 },
  { name: "Isaac", title: "Manager", hourly_rate: 50.0, worked_hours: 40 },
  { name: "Jane", title: "Developer", hourly_rate: 30.0, worked_hours: 45 },
  { name: "Kevin", title: "Designer", hourly_rate: 25.0, worked_hours: 35 },
  { name: "Linda", title: "Developer", hourly_rate: 30.0, worked_hours: 50 },
  { name: "Mike", title: "Manager", hourly_rate: 50.0, worked_hours: 40 },
  { name: "Nancy", title: "Developer", hourly_rate: 30.0, worked_hours: 45 },
  { name: "Oliver", title: "Designer", hourly_rate: 25.0, worked_hours: 40 },
  { name: "Pamela", title: "Developer", hourly_rate: 30.0, worked_hours: 50 },
  { name: "Quincy", title: "Manager", hourly_rate: 50.0, worked_hours: 40 },
  { name: "Rachel", title: "Developer", hourly_rate: 30.0, worked_hours: 45 },
  { name: "Steve", title: "Designer", hourly_rate: 25.0, worked_hours: 35 },
  { name: "Tina", title: "Developer", hourly_rate: 30.0, worked_hours: 50 },
];

/**
 * Empleados {
 *  name: string // nombre del empleado
 *  title: string, // cargo
 *  hourly_rate: number, // taza por hora
 *  worked_hours: number // horas trabajadas
 * }
 */

// funcion que me genere los pagos
//
const companyName = "4geeks";

// Paga la nomina
function pagaNomina() {
  empleados.forEach((empleado, indice) => {
    const salarioEmpleado = empleado.hourly_rate * empleado.worked_hours;
    console.log(
      `${companyName} paga a ${empleado.name}, ${salarioEmpleado}$ por sus servicios como ${empleado.title}`
    );
  });
}
// pagaNomina();

// manejar los despidos por departamento

// va a eliminar todos los empleados que sean despedidos
function despidos(departamento) {
  let noBotados = [];
  empleados.forEach((empleado) => {
    if (empleado.title === departamento) {
      console.log(`Estas botado ${empleado.name} :(`);
    } else {
      noBotados.push(empleado);
    }
  });
  // Reemplazo el valor anterior de empleados por el nuevo
  empleados = noBotados;
}

function contrata(name, title, hourly) {
  const nuevoEmpleado = {
    name: name,
    title: title,
    hourly_rate: hourly,
    worked_hours: 0, // es 0 porque es un nuevo empleado
  };
  // arreglo.push(nuevo_elemento)
  empleados.push(nuevoEmpleado);
  console.log(`Bienvenido ${nuevoEmpleado.name}`);
}
console.log(empleados);

despidos("Designer");
console.log(empleados);

despidos("Developer");

console.log(empleados);

contrata("Jose Morrone", "Sr. Web dev", "30");
console.log(empleados);

contrata("Ana Plata", "Jr. Web dev", "12");
console.log(empleados);

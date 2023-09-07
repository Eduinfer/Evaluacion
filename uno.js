let numEmpleados = parseInt(prompt("digite la cantidad de empleados"));
let sueldo = [];
for(let i = 1; i<=numEmpleados; i++){
    sueldo = parseInt(prompt(`digite el sueldo numero${i}`));
    sueldo.push(i)
}
console.log(sueldo)
let promedio = sueldo/numEmpleados;
console.log(promedio)
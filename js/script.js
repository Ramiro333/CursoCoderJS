alert("bienvenido!")
let nombre = prompt("escribe tu nombre");
let edad = prompt("escribe tu edad");

console.log("tu nombre es " + nombre + " y tienes " + edad + " años" );
let añoNacimiento = 2024 - edad;
if (edad < 18) {
    alert("eres menor de edad")
} else {
    alert("eres mayor de edad")
}

// let edad = prompt("cual es tu edad");
// if (edad < 0){  
//     console.log("debe ingresar un numero mayor a 0");
// }
// else if (edad >= 18){
//     console.log("sos mayor de edad");
// } else {
//     console.log("sos menor de edad");
// }
// if(edad % 2 == 0){ 
//     console.log("el numero es par");

// } else{
//     console.log("el numero es impar");
// }
// let numero1 = prompt("escriba el priemr numero: ");
// let numero2= prompt("escriba el sgeundao numero: ");
// if (numero1 < numero2){ 
//     console.log("el segundo numero es mayor al segundo")
// }   else if (numero1 > numero2){
//     console.log("el primer numero es mayor al segundo");
// } else{
//     console.log("el primer numero y el segundo numero son el mismo")
// }
// for( i = 0; i <= 10; i++){
//     console.log(i);
// }
// let numeroUsuario = prompt("escoge un numero: ");
// for(i = 0; i <= numeroUsuario; i++){
//     console.log(i)
// }
// let i = 1
// do{
//     console.log(i)
//     i++
// } while (i<=10)
// const TEMPERATURA_MAXIMA = 40;
// let tempUsuario = prompt("elija una temperatura: ");
// if (tempUsuario < TEMPERATURA_MAXIMA){
//     console.log("la temperatura es " + (TEMPERATURA_MAXIMA - tempUsuario) +" grados menor a la temperatura maxima");
// } else {
//     console.log("la temperatura excede lo permitido por " + (tempUsuario - TEMPERATURA_MAXIMA) + " grados" );
// }
// let edadUsuario = prompt("ingrese su edad: ");
// if (edadUsuario < 19 && edadUsuario > 13){
//     console.log("usted es adolescente");
// } else if (edadUsuario <13){
//     console.log("usted es un niño");
// }   else {
//     console.log("usted es un adulto ")
// }
// for(i=0;i<=20;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }
// let numeroUsuario = prompt("ingrese un numero: ");
// let i = 0;
// do{
//     i++
//     if (i%2==0){
//         console.log(i);
//     }
// } while(numeroUsuario >= i);
// let i = 0;
// do{
//     i++
//     if(i%5==0){
//         console.log(i)
//     }
// }while(i<=50)
// let numero1 = 10;
// let numero2 = 20;
// if (numero1 < numero2){
//     console.log("numero 2 es mayor a numero 1");
// }   else if (numero1 > numero2){
//     console.log("numero 1 es mayor a numero 2");
// }   else {
//     console.log("numero 1 y numero 2 son iguales");
// }
// let numero1 = prompt("cual es el primer numero");
// let numero2 = prompt("cual es el segundo numero");
// let numero3 = prompt("cual es el tercer numero");
// if(numero1 > numero2 && numero1 > numero3){
//     console.log("numero 1 es el numero mas grande");
// }else if(numero2 > numero3){
//     console.log("numero 2 es el numero mas grande");
// } else{
//     console.log("numero3 es el numero mas grande");
// }
// for(i = 0 ; i <= 100 ; i++){
//     if(i % 3 == 0 ){
//         console.log(i);
//     }
// }
// let numero = prompt("ingrese un numero");
// let numeroDoble = numero * 2;
// do{
//     console.log(numero);
//     numero++;
// } while(numero <= numeroDoble)
// let i = 25;
// let j = 0;
// do{
//     j++
//     if(j % 2 != 0){
//         console.log(j);
//     }
// }while(j<i);
// let dia = prompt("elije un dia de la semana");
// switch (dia){
//     case "lunes":
//     case "martes":
//     case "miercoles":
//     case "jueves":
//     case "viernes":
//         console.log("es dia laboral");
//         break
//     case "sabado":
//     case "domingo":
//         console.log("es dia no laboral");
//         break
//     default:
//         console.log("dia no valido");
// }
// let numero = prompt("ingresa 1 o 7: ");
// switch (numero) {
//     case "1":
//         console.log("domingo");
//         break;
//     case "2":
//         console.log("lunes");
//         break;
//     case "3":
//         console.log("martes");
//         break;
//     case "4":
//         console.log("miercoles");
//         break;
//     case "5":
//         console.log("jueves");
//         break
//     case "6":
//         console.log("viernes");
//         break
//     case "7":
//         console.log("sabado");
//         break
//     default:
//         console.log("numero no valido");
//         break;
// }
// let mesSeleccionado = prompt("elija un mes");
// switch(mesSeleccionado){
//     case "enero":
//         console.log("enero tiene 31 dias")
//         break
//     case "febrero":
//         console.log("febrero tiene 29 dias")
//         break
//     case "marzo":
//         console.log("marzo tiene 31 dias")
//         break
//     case "abril":
//         console.log("abril tiene 30 dias")
//         break
//     case "mayo":
//         console.log("mayo tiene 31 dias")
//         break
//     case "junio":
//         console.log("junio tiene 30 dias")
//         break
//     case "julio":
//         console.log("julio tiene 31 dias")
//         break
//     case "agosto":
//         console.log("agosto tiene 31 dias")
//         break
//     case "septiembre":
//         console.log("septiembre tiene 30 dias")
//         break
//     case "octubre":
//         console.log("octubre tiene 30 dias")
//         break
//     case "noviembre":
//         console.log("noviembre tiene 30 dias")
//         break
//     case "diciembre":
//         console.log("diciembre tiene 31 dias")
//         break
//     default:
//         console.log("mes no valido")
// }
// let numeroSeleccionado = prompt("elija un numero del 1 al 12");
// switch(numeroSeleccionado){
//     case "1":
//         console.log("enero")
//         break
//     case "2":
//         console.log("febrero")
//         break
//     case "3":
//         console.log("marzo")
//         break
//     case "4":
//         console.log("abril")
//         break
//     case "5":
//         console.log("mayo")
//         break
//     case "6":
//         console.log("junio")
//         break
//     case "7":
//         console.log("julio")
//         break
//     case "8":
//         console.log("agosto")
//         break
//     case "9":
//         console.log("septiembre")
//         break
//     case "10":
//         console.log("octubre")
//         break
//     case "11":
//         console.log("noviembre")
//         break
//     case "12":
//         console.log("diciembre")
//         break
//     default:
//         console.log("numero no valido")
// }
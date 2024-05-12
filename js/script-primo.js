let numeroIngresado = prompt("ingrese un numero");
let raizNumeroIngresado = Math.ceil( Math. sqrt(numeroIngresado));

function esPrimo(){
    if(numeroIngresado <=1) {
        console.log("no es primo");
        return
    }
    for (let cuenta = 2; cuenta <= raizNumeroIngresado; cuenta++) {
        if(numeroIngresado % cuenta == 0 && numeroIngresado != 2){
            console.log("no es primo");
            return
        }
    }
    console.log("es primo")
}
esPrimo(numeroIngresado);
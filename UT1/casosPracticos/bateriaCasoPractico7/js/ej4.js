"use strict";

function validar(){
    
    let n = parseInt(document.getElementById("inputNum").value);
    let ret = Number.isInteger(n);

    if(!ret){
        document.getElementById("parrNum").innerHTML = `${document.getElementById("inputNum").value} no es un numero`;
    } else {
        if(n > 0){
            if(n%3===0){
                document.getElementById("parrNum").innerHTML = `${n} es positivo y divisible por 3`;
            } else {
                document.getElementById("parrNum").innerHTML = `${n} es positivo y no es divisible por 3`;
            }
        } else if (n<0){
            document.getElementById("parrNum").innerHTML = `${n} es negativo`
        }
    }
}
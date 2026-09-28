"use strict";

let n = "a";

while(!Number.isInteger(n)){
    n = parseInt(prompt("Introduce un numero: "));
}

if(n%2===0){
    alert(`${n} es par`);
} else {
    alert(`${n} es impar`);
}
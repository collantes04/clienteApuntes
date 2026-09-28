'use strict';

let num = "a";

while(!Number.isInteger(num)){
    num = parseInt(prompt("Introduce un numero: "));
}

switch(true){
    case (num > 0):
        alert(`${num} es positivo`);
    break;

    case (num<0):
        alert(`${num} es positivo`);
    break;

    default:
        alert("Es cero");
    break;
}
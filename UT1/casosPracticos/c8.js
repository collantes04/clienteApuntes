"use strict";

let entrada = prompt("Introduce un caracter: ");


switch(true){
    case (entrada.charCodeAt(0) >= 48 && entrada.charCodeAt(0)  <=57): 
        alert(`${entrada} es un numero`);
    break;

    case ((entrada.charCodeAt(0)>=65 && entrada.charCodeAt(0)<=90) 
    || (entrada.charCodeAt(0)>=97 && entrada.charCodeAt(0) <= 122)):
        alert(`${entrada} es una letra`);
    break;

    default: 
        alert(`${entrada} es un caracter especial`);
    break;
} 
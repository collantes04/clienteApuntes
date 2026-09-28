'use strict';

function celFar(){
    let temp = parseInt(prompt("Introduce la temperatura en Celsius a convertir"));
    const resultado = ((temp*1.8)+32);
    alert(`La conversión es: ${resultado} ºF`);
}

function farCel(){
    let temp = parseInt(prompt("Introduce la temperatura en Farenheit a convertir"));
    const resultado = ((temp-32)/1.8);
    alert(`La conversión es: ${resultado} ºC`);
}   
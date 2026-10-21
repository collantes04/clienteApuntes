"use strict";

function generarRandom(){
    let a = parseInt(prompt("Introduce el primer número del intervalo"));
    let b = parseInt(prompt("Introduce el segundo valor del intervalo"));

    let min = Math.min(a,b);
    let max = Math.max(a,b);

    let arr = [];

    for (let i = 0; i < 5; i++) {
        arr.push(Math.floor(Math.random() * (max-min+1)+min));
    }

    let div = document.getElementById("div1");

    div.innerHTML = `Los números generados son: ${arr.join(", ")}`;

    return console.log("Los números se han generado correctamente");
}
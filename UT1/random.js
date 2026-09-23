"use strict";
function generarNumeros() {
  let n1 = parseInt(prompt("Introduce el numero primero"));
  let n2 = parseInt(prompt("Introduce el numero segundo"));
  let cadenaNum = "";

  let min = Math.min(n1, n2);
  let max = Math.max(n1, n2)


  for(let i=0; i<5;i++){
    cadenaNum += Math.floor(Math.random() * (max - min) + min) + " ";
    /*se aplica formula matemática de los intervalos, 
    esto fuerza al random a generar un numero mayor o igual que minimo
    y menor que max*/
  }

  document.getElementById("divParrafo").innerHTML =
    `<p>Los 5 números aleatorios dentro del intervalo
        ${min} y ${max} son: ${cadenaNum} </p>`;

  console.log(min + " " + max + " " + cadenaNum);
}
"use strict";


function capturaDatos(){
    let edad = parseInt(document.getElementById("edadCli").value);
    let es3d = document.getElementById("3d").value.toLocaleLowerCase();
    let dia = document.getElementById("dias").value;
    let precioFinal = calcularDescuentos(edad, es3d, dia);
    document.getElementById("descuentoResultado").innerHTML = `Precio final ${precioFinal} euros`;
}


function calcularDescuentos(edad, es3d, dia){
    edad = parseInt(edad);
    let precio = 10;

    if(edad <= 12){
        precio /= 2;
        alert("Descuento aplicado (50%)");
    } else if(edad >= 65){
        precio *= 0.7;
        alert("Descuento aplicado (30%)");
    } else {
        alert("No hay descuento por edad")
    }

    if(dia === 'l'){
        precio /= 2;
        alert("Es lunes, dia del espectador mitad de precio");
    } else if (dia === 'x'){
        precio *= 0.8;
    } else {
        alert("No hay descuento por dia");
    }

    if(es3d === 's'){
        precio += 3;
        alert("Suplemento 3D +3€ añadido");
    }

    return precio;
}


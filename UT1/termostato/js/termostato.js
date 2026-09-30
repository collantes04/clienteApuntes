"use strict";

function tomarDatos(){
    let modoSel = document.getElementById("modo").value.toLocaleLowerCase();
    let temp = parseInt(document.getElementById("temp").value);
    informe(modoSel, temp);
}

function informe(modoSel, temp){
    temp = parseInt(temp);

    switch(modoSel){
        case 'calefaccion':
            if(temp<20){
               alert(`=================\nINFORME TERMOSTATO\n================\nTemperatura: ${temp}\nModo: Calefaccion\nEstado: ENCENDIDO`);
            } else if(temp>=20){

               alert(`=================\nINFORME TERMOSTATO\n================\nTemperatura: ${temp}\nModo: Calefaccion\nEstado: APAGADO (hace calor suficiente)`);
            }
            break;
        case 'aire acondicionado':

            if(temp>25){

               alert(`=================\nINFORME TERMOSTATO\n================\nTemperatura: ${temp}\nModo: Aire acondicionado\nEstado: ENCENDIDO`);
            } else if(temp<=25){
                alert(`=================\nINFORME TERMOSTATO\n================\nTemperatura: ${temp}\nModo: Aire acondicionado\nEstado: APAGADO (hace suficiente frio)`);

            }
            break;
        case 'apagado':
               alert(`=================\nINFORME TERMOSTATO\n================\nSISTEMA INACTIVO`);
            break;
    }
}
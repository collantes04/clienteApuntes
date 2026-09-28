'use strict';

const diasEnum = {1 : 'LUNES',
    2 : 'MARTES',
    3 : 'MIERCOLES',
    4 : 'JUEVES',
    5 : 'VIERNES',
    6 : 'SABADO',
    7 : 'DOMINGO',

    getDia(numero){
        return this[numero];
    }
};

let numeroIntro = parseInt(prompt("Introduce un numero"));

alert(diasEnum.getDia(numeroIntro));
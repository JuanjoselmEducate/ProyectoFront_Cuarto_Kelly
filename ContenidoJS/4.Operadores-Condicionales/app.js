'use strict';

//operadores: aretimeticos, logicos, de comparacion y de asignacion

let numero1 = 10;
let numero2 = 20;
let numero3 = '20';
let resultado = numero1 + numero2;//suma
console.log("Resultado de la suma:", resultado);
resultado = numero1 - numero2; // Resta
console.log("Resultado de la resta:", resultado);   
resultado = numero1 * numero2; // Multiplicación
console.log("Resultado de la multiplicación:", resultado);  
resultado = numero1 / numero2; // División
console.log("Resultado de la división:", resultado);
resultado = numero1 % numero2; // Módulo
console.log("Resultado del módulo:", resultado);

//Log
let boolResultado = (numero1 > numero2);
console.log("Resultado de la comparación (numero1 > numero2):", boolResultado);
boolResultado = (numero2 == numero3);
console.log("Resultado de la comparación (numero1 == numero3):", boolResultado);
boolResultado = (numero2 === numero3);
console.log("Resultado de la comparación (numero1 === numero3):", boolResultado);
"use strict";
import { potencia, factorial } from "./operaciones.js"; 
import { filtrarPares, cuadrados } from "./other.js";

console.log(potencia(2,3));
const myArray = [2,5,8,9,6,2,3,5,4,8,];
const myArrayNew = filtrarPares(myArray);
console.log("Array filtrado de pares: ", myArrayNew)
const myArrayCuadros = cuadrados(myArray);
console.log("Array de cuadrados: ", myArrayCuadros)

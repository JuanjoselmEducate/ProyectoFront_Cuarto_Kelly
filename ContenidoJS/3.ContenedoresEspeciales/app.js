'use strict'
//Contadores
let contador = 0;


//Acumulador
let edades =0;

//bucle
for(let i=0;i<3;i++){
   let edad = prompt("Ingrese su edad");
   edades +=edad; //sumas progresivas
   contador++; //contar
}
alert("El promedio de edad es: " + (edades/contador));


"use strict";
//1. Objeto literan de Js

let curso = {
    nombre : "Javascritp",
    duracion : "60",
    level : "medio",
    capacidad : "20"
};
console.log(curso.capacidad);
//2.Creador de objeto por constructor
function persona (name, lastename, age){
    this.nombre = name;
    this.apellido = lastename;
    this.edad = age;
}

//instancia
let myPeron = new persona("Juan", "Lastre", 19);
console.log("Persona compelta:",myPeron);
console.log("Nombre del objeto:", myPeron.nombre)

const nombreLibro = "It";
const genero = "Terror";
const editorial = "Fama";

const libro = {
    nombreLibro,
    genero,
    editorial,
    escribir: ()=>{
        return `El libro es ${nombreLibro} del genero ${genero} y lo consiguen en la editorial ${editorial}`
    }
}

console.log(libro.escribir());
console.log("**************************************************************");
console.log(Object.values(libro));
console.log(Object.keys(curso));
//volver iterable a un objeto

Object.entries(libro).forEach(([key, value])=>console.log(key, value));

//iterrables
/*
Los arreglos y las casdenas de caracteres son itelarbles 
ahora lo objetos direcatamente no podemos iterarlos
los iterables son un protocolo que se puede aplicar a cualquier arreglo 
*/

console.log("**************************************************************");
const arreglo = [1,"6", 3.3, false, "hoola"];
const myIterator = arreglo[Symbol.iterator]();
console.log(myIterator);
console.log(myIterator.next());

 for(let c of arreglo){
    //console.log(c);
} 

let color = {
    nombre : "Rojo",
    color: "FF0000",
    marca:"ColorFull"
}
// como iterar el objeto
color[Symbol.iterator] = function(){
    console.log();
}
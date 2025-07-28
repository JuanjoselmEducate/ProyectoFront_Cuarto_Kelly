"use strict";

/*
Seleccionar los elementos del DOM:

1.getElemetById - getElementByClassName - getElementByTagName
2. querySelector(#id) - querySelector(.class) - querySelector(nav) - querySelectorAll
*/

let titulo = document.getElementsByTagName('h1');
let tituloQuery = document.querySelector('h1');

console.log(titulo);

const menu = document.getElementById('menu');
const menu2 = document.querySelector('#menu');

console.log(menu);

const secciones = document.getElementsByClassName('seccion');
const seccionesQuery = document.querySelectorAll('.seccion');

console.log(secciones)
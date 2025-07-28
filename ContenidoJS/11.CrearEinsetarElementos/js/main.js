'use strict';
/* crear e insertar elementos en el DOM 
 



*/


const articuloPollos = document.createElement("article"); 
//Atributos
articuloPollos.id = "art-chickens";
articuloPollos.className = "articulos";
articuloPollos.style = "background-color: #f0f0f0; padding: 20px; margin: 10px; border-radius: 5px;";
//insetra un parrafo dentro del artículo
const parrafoPollos = document.createElement("p");
parrafoPollos.textContent = "Los pollos son aves domésticas muy comunes en todo el mundo. Son una fuente importante de alimento y se crían por su carne y huevos.";
// insetar el elemento en el DOM
document.body.appendChild(articuloPollos);
// insertar el párrafo dentro del artículo
articuloPollos.appendChild(parrafoPollos);
// necesito otro párrafo pero no piedo copiar de forma convencional sino que tengo que hacerlo a través de un cloneNode
const parrafoRoedores = parrafoPollos.cloneNode(true); // true para clonar también los nodos hijos
parrafoRoedores.textContent = "<i>Los roedores son mamíferos pequeños</i> y adaptables. <b>Incluyen ratas, ratones y hámsters</b>, y son conocidos por su capacidad de reproducción rápida.";
parrafoPollos,innerHTML = "<i>Los roedores son mamíferos pequeños</i> y adaptables. <b>Incluyen ratas, ratones y hámsters</b>, y son conocidos por su capacidad de reproducción rápida.";    
// insertar el párrafo de roedores dentro del artículo
articuloPollos.appendChild(parrafoRoedores);
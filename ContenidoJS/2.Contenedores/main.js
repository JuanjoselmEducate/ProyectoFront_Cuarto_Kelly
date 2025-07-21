/* en Js no se conocen como variables, se conocen como contenedores */

/* 
    Modos de travbajar con Js

    Slooping

    Strict
*/

'use strict'; //modo estricto, ayuda a evitar errores comines y mejoar la seguras del codigo.

/* 
    Contenedores:

    Var = Global  //se debe de usar
    let = Local
    Constante = Constantes-Local
*/

var vari1 = "23";
let vari2 = "Holaaa";
if(true){
    var vari1= 23;
    var num1 = 10;
    let vari2 = 50;
    console.log(vari2);
}
console.log(vari1, "", vari2)
console.log(num1)
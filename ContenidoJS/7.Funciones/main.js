//Funciones anonimas y autoinvocacion
"Use strict";
(()=>{
    alert("Hola, soy una funcion anonima autoinvocada.")
})();
(function(){
    console.log("Esta es ottra funcion anonima autoinvocada")
})();
//funcion anonima cuando se asigna a uan variable o no es auto invocada
const functionAnonima = function(nomrbe){
    console.log("Hola estudiant "+ nomrbe);
};
functionAnonima("Natalia");
//Funcion anonima cuando se asigna a una variable o no es auto invocada y tipo flecha
const functionAnonimaFlecha = (nombre) => {
    console.log("Hola estudiante "+ nombre);
}
functionAnonimaFlecha("David");
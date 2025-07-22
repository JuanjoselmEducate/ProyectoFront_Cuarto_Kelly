//Los arreglos tienen varios metodos que nos permiten manipular:
// filter, map, reduce, forEach, find some, sort, etc.


const buscarElemento = (data) =>{
    let result = data.filter((e)=> e % 2 === 0);
    return result;
}

const generarCuadrados = (data) =>{
    return data.map((e)=>e*e);
}

export {
    buscarElemento as filtrarPares,
    generarCuadrados as cuadrados
}
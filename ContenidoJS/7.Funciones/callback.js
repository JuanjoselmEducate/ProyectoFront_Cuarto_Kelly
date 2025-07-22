let mensaje = " Uniempresarial";
const saludo = function(msm){
    console.log(`Hola estudiantes de ${msm}`);
};
const ejecutarSaludo = (callback,otherMsm) =>{
    callback(otherMsm);
}
//Invocacion
ejecutarSalud(saludo, mensaje);
// declaración de una función
function multiplica(primerOperando){
    var resultado = primerOperando * 2;
    console.log ("El resultado es: " + resultado);
}

multiplica(12);

function multiplicaN3(){
    var resultado2 =12*12;
    console.log ("el resultado es "+ resultado2);

}

multiplicaN3();
// funcion con expresión
var resultado= function multiplicaN2(primerOperando){
    return 2* primerOperando;
}

console.log(resultado (25));

//Función flecha
const saludaPersona = (nombre ) => console.log ("Feliz cumpleaños " + nombre);

saludaPersona("Guillermo");  //llamado a la función flecha

const suma= (numero ) => console.log (numero *2);
suma (12);


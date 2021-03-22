// Programación orientada a objetos

//Creacion de un objeto
var celular = {
    color: "Azul",
    peso: "80gr",
    numCamaras: 4,
    sistema: "Android",
    duracionBateria:10
}

console.log (celular.color);  //muestra la propiedad color del objeto
console.log(celular ["numCamaras"]);

class galleta{
    constructor (tamaño, forma, sabor ){
        this.tamaño = tamaño,
        this.forma = forma,
        this.sabor = sabor
    }
}

//creación de objetos de la clase galleta
let galletaChocolate = new galleta ("5x5 cm", "cuadrada","chocolate");
var galletaVainilla = new galleta ("3cm", "circular","vainilla");

console.log(galletaChocolate);
console.log (galletaVainilla);

console.log(galletaChocolate.sabor);
console.log(galletaVainilla["sabor"]);
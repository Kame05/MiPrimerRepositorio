//Realiza un programa que lea por teclado 5 calificaciones
// y muestre el promedio de estas. Utilizar arreglos
const prompt = require ('prompt-sync')();
var calificaciones =[];
calificaciones[0]= prompt ("Inserte la primera calificacion");

calificaciones[1]= prompt ("Inserte la segunda calificacion");
calificaciones[2]= prompt ("Inserte la tercera calificacion");
calificaciones[3]= prompt ("Inserte la cuarta calificacion");
calificaciones[4]= prompt ("Inserte la quinta calificacion");
console.log(calificaciones);
var c1 = calificaciones[0];
var c2 = calificaciones[1];
var c3 = calificaciones[2];
var c4 = calificaciones[3];
var c5 = calificaciones[4];
var prom = parseInt (c1)+ parseInt (c2)+parseInt (c3)+parseInt (c4)+parseInt (c5);
prom /= 5;
console.log (" su promedio es " + prom);

var promc =0;
for( var j=0; j < calificaciones.length; j++)
{
    console.log ("EL valor de la posicion"+ j + "es"+ calificaciones[j]);
    promc+= parseInt (calificaciones[j]) /5;
    console.log (promc);
}




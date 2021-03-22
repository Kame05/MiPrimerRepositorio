var arregloNombres = ["Luis", "Diana", "Omar","Paola"];
arregloNombres[2];
console.log (arregloNombres[2]);
arregloNombres [2] = "Rosa";
console.log (arregloNombres[2]);
delete arregloNombres [2]; // borra elemento
console.log (arregloNombres);
console.log ("la cantidad de elementos en el arreglo es " + arregloNombres.length); // muestra el tamaño del arreglo
arregloNombres.push ("Cristina"); //agrega elemento al final del arreglo
console.log (arregloNombres);
arregloNombres.pop();// borra elemento del final del arreglo
console.log(arregloNombres);
arregloNombres.splice (0, 0, "Cristina"); //Sustituye elemento en la posición y el numero de elementos q se borren(segundo 0)
console.log(arregloNombres);
arregloNombres.splice (1,4); //elimina elementos con posición
console.log(arregloNombres);

var concatenaN1= ["Hola", "Buenas", "Tardes"];
var concatenaN2= [" Adios", "Buenas", "Noches"];
console.log(concatenaN1.concat(concatenaN2));  //une dos arreglos




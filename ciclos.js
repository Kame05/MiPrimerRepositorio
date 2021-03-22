//ciclo while
var contadorN1 = 5;
var contadorN2 = 30
while ( contadorN1 >=0 )
{
    console.log ("Hola");
    contadorN1 --;
};
contadorN1= 5;

while (contadorN1 < 10 && contadorN2 > 25){
    console.log ("ContadorN1: " + contadorN1 + "ContadorN2 " + contadorN2 );
    contadorN1++;
    contadorN2--;
}


//ciclo do-while
var contadorN3= 0;
var condicion = "Hola";
do{
   console.log ("Entraste al ciclo do while");
   if ( contadorN3 == 2){
      condicion = "Adios";

   }
   contadorN3++; 
}while(condicion== "Hola");

var condicionN2=25;
do{
    console.log ("Valor: " + condicionN2);
    condicionN2 -=5;

}while(condicionN2 >=5);

//suma de numeros
const prompt =require ('prompt-sync')();
var recibeNumero;
var suma=0;
do{
   recibeNumero = prompt ("Dame un número a sumar");
   var suma = suma+ parseInt(recibeNumero); 
}while (recibeNumero!=0);
console.log("La suma total es "+ suma);




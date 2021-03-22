// Programa que obtenga el precio de un producto
// y calcule el precio total, ya que también se va a 
// corar el costo de envio unicamente si el precio del producto es 
//mayor o igual a $399

const prompt = require('prompt-sync')();
var nombreProducto = "Celular";
var precioProducto = 200;

function precioTotal(precio, nombreProducto)
{
    var resultado = 0;
    if ( precio <= 399)
    {
       resultado = precio + 100;
       console.log("El total a pagar es: " + resultado);     
    }  
    else if (precio > 399)
    {
        resultado = precio;
        console.log("El total a pagar es: " + resultado);     
    }
}

precioTotal(precioProducto,nombreProducto);

//Ambito de una función
function ambitoVar()
{
    const i=1;
    if (i==1)
    {
        var variableVar = "Ambito de variable";
    }
    console.log (variableVar);
}

ambitoVar();

let nombre = "Luis";
nombre = "Pablo";
console.log(nombre);

function ambitoLet()
{
    const i=1;
    if (i==1)
    {
        let variableLet = "Ambito de variable -Let";
        console.log (variableLet);
    }
    
}

ambitoLet();




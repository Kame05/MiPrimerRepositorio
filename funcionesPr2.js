// Ejercicio 2
// Definir una función que muestre la información de un texto
// que se introduce como argumento y determinar si el texto
// contiene mayusculas, minusculas o ambas

function determinaTexto (texto)
{
    if (texto == texto.toUpperCase())
    {
        console.log ( "El texto esta en mayúsculas");

    }
    else if (texto == texto.toLowerCase())
    {
        console.log ("El texto está en minúsculas");
    }
}

determinaTexto (" HOLA MUNDO");
determinaTexto ("hola ");
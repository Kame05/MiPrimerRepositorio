//Ejercicio repaso 2
//Crea un programa en dodnde tengas que adivinar las letras de una palabra de 4 letras,
//tendrás solo 4 intentos para adivinarla, en un inicio la palabra estará oculta
//pero cada vez que aciertes, se mostrará la letra, si adivinas la palabra antes de que 
//se te acaben los intentos, ganas, sino pierdes.

const prompt = require ('prompt-sync')();
var palabraOculta = [];
var palabraMostrada = ["-","-","-","-"];

var contadorAciertos =0;
var contadorFallas = 4; 

palabraOculta[0] = prompt ("Dame la letra número 1: ");
palabraOculta[1] = prompt ("Dame la letra número 2: ");
palabraOculta[2]= prompt ("Dame la letra número 3: ");
palabraOculta[3] = prompt ("Dame la letra número 4: ");
//console.log (palabraOculta);

for (var i=0; i < (palabraOculta.length *2 ); i++)
{
    var intento = prompt ("Ingresa una letra: ");
    switch (intento)
    {
        case palabraOculta[0]:
              palabraMostrada[0] = palabraOculta[0];
              console.log(palabraMostrada);
              contadorAciertos++;
              break;
            case palabraOculta[1]:
                palabraMostrada[1] = palabraOculta[1];
                console.log(palabraMostrada);
                contadorAciertos++;
                break;
            case palabraOculta[2]:
                    palabraMostrada[2] = palabraOculta[2];
                    console.log(palabraMostrada);
                    contadorAciertos++;
                    break;     
                case palabraOculta[3]:
                        palabraMostrada[3] = palabraOculta[3];
                        console.log(palabraMostrada);
                        contadorAciertos++;
                        break;
                    default:
                        console.log ("Te equivocaste");
                        console.log (" Te quedan " + contadorFallas + "intentos");          
                        console.log( palabraMostrada);
                        contadorFallas--;
                        break;
    }
    if (contadorAciertos == 4)
    {
      break;
    } 
    else 
       if (contadorFallas == 0)
       {
           break;
       }
}
if (( contadorFallas == 0 && contadorAciertos < 4) || (contadorFallas < 4))
{
    console.log ("PERDISTE, VUELVE A INTENTAR");
}
else 
   if (contadorAciertos == 4 )
   { 
       console.log ("GANASTE, ADIVINASTE LA PALABRA :D");
   }


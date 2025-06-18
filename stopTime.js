//? 21.- Parando el tiempo
/*
 * Crea una función que sume 2 números y retorne su resultado pasados
 * unos segundos.
 * - Recibirá por parámetros los 2 números a sumar y los segundos que
 *   debe tardar en finalizar su ejecución.
 * - Si el lenguaje lo soporta, deberá retornar el resultado de forma
 *   asíncrona, es decir, sin detener la ejecución del programa principal.
 *   Se podría ejecutar varias veces al mismo tiempo.
 */

//? usar setTimeout pasandole la función de suma como callback

function stopTime(a, b, sec){
  return new Promise ((resolve) => setTimeout(() =>{ resolve(a + b);}, (sec * 1000)));
}

stopTime(5, 3, 1).then(r => console.log("Resultado A:", r));
stopTime(10, 10, 3).then(r => console.log("Resultado B:", r));
//? 17.- En mayúscula
/*
 * Crea una función que reciba un String de cualquier tipo y se encargue de
 * poner en mayúscula la primera letra de cada palabra.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

function strToUpperCase(str) {
  //todo convertir en array con split, luego convierto el primer indice en mayúscula, luego separo el primer elemento y lo pusheo a un nuevo array para luego pushear los demás o concatenarlo

  let words = str
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");

  console.log(words);
}
strToUpperCase("hola mundo");
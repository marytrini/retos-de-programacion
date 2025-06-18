//? 12.- Eliminando caracteres
/*
 * Crea una función que reciba dos cadenas como parámetro (str1, str2)
 * e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO
 *   estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO
 *   estén presentes en str1.
 */

function removeCharacters(str1, str2) {
  const out1 = str1
    .split("")
    .filter((ele) => !str2.includes(ele))
    .join("");
  const out2 = str2
    .split("")
    .filter((ele) => !str1.includes(ele))
    .join("");
  return { out1, out2 };
}

const result = removeCharacters("hola mundo", "mundo feliz");
console.log(`out1: ${result.out1}`);
console.log(`out2: ${result.out2}`);
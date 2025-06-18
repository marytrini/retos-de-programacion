//? 8.- Contando palabras
/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */
function countWords(txt) {
  const words = txt
    .toLowerCase()
    .replace(/[.,!?;:]/g, "")
    .split(/\s+/);
  const wordCount = {};

  words.forEach((word) => {
    if (wordCount[word]) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  });
  return wordCount;
}
const text = "Hola, mundo! Hola a todos. ¿Cómo están todos? Todos están bien.";
console.log(countWords(text));
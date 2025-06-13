
//? 2.- ¿Es un anagrama?
/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function isAnagram(word1, word2) {
  const sortedWord1 = word1.toLowerCase().split("").sort().join("");
  const sortedWord2 = word2.toLowerCase().split("").sort().join("");

  if (
    sortedWord1 === sortedWord2 &&
    word1.toLowerCase() !== word2.toLowerCase()
  ) {
    return true;
  }
  return false;
}
// console.log(isAnagram("amor", "roma")); // true
// console.log(isAnagram("amor", "mario")); // false
// console.log(isAnagram("amor", "Amor")); // false
// console.log(isAnagram('libre', 'belir'));
// console.log(isAnagram('valor', 'olavr'));


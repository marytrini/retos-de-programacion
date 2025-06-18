//? 13.- ¿Es un palíndromo?
/*
 * Escribe una función que reciba un texto y retorne verdadero o
 * falso (Boolean) según sean o no palíndromos.
 * Un Palíndromo es una palabra o expresión que es igual si se lee
 * de izquierda a derecha que de derecha a izquierda.
 * NO se tienen en cuenta los espacios, signos de puntuación y tildes.
 * Ejemplo: Ana lleva al oso la avellana.
 */

function isPalindrome(text) {
  const cleanText = text.replace(/[^a-z0-9]/gi, "").toLowerCase();

  const reversedText = cleanText.split("").reverse().join("");

  return cleanText === reversedText;
}

console.log(isPalindrome("Ana lleva al oso la avellana"));
console.log(isPalindrome("Hola,aloh"));
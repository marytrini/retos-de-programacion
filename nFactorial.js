//? 14.- Factorial recursivo
/*
 * Escribe una función que calcule y retorne el factorial de un número dado
 * de forma recursiva.
 */

function nFactorial(n) {
  if (n < 1) return 1;

  return n * nFactorial(n - 1);
}
console.log(nFactorial(3));
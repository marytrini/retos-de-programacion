//?9.- Decimal a binario
/*
 * Crea un programa se encargue de transformar un número
 * decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 */
function decimalToBinary(n) {
  if (n === 0) return "0";
  let binary = "";
  while (n > 0) {
    binary = (n % 2) + binary;
    n = Math.floor(n / 2);
  }
  return binary;
}
console.log(decimalToBinary(10));
console.log(decimalToBinary(255));
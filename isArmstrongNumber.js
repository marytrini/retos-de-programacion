//? 15.- ¿Es un número de Armstrong?
/*
 * Escribe una función que calcule si un número dado es un número de Armstrong
 * (o también llamado narcisista).
 * Si no conoces qué es un número de Armstrong, debes buscar información
 * al respecto.
 */

//todo Determinar la cantidad de dígitos del número
//todo para cada dígito elevar ese dígito a la potencia del número de dígitos
//todo Suma los resultados de cada número elevado a la potencia
//todo Si el resultado de la suma es igual al número original entonces es un número de Armstrong

function isArmstrongNumber(num) {
  let numStr = num.toString();
  let digits = numStr.split("");
  let n = digits.length;
  let sum = 0;

  for (let digit of digits) {
    let value = Number(digit);
    sum += value ** n;
  }

  return sum === num;
}
console.log(isArmstrongNumber(37));
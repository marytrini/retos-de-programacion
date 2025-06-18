//? 4.- ¿Es un número primo?
/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

function isPrime({ array }) {
  const isPrimeNumber = (n) => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  array.forEach((n) =>
    console.log(`${n} ${isPrimeNumber(n) ? "es" : "no es"} un número primo`)
  );
}
isPrime({array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]});
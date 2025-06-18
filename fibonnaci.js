//? 3.- La sucesión de Fibonacci
/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

function fibonacci(n) {
  let n0 = 0;
  let n1 = 1;

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      console.log(n0);
    } else if (i === 1) {
      console.log(n1);
    } else {
      let fib = n0 + n1;
      console.log(fib);
      n0 = n1;
      n1 = fib;
    }
  }
}
fibonacci(50);
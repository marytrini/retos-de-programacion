//? 22.- Calculadora 
/*
 * Lee el fichero "Challenge21.txt" incluido en el proyecto, calcula su
 * resultado e imprímelo.
 * - El .txt se corresponde con las entradas de una calculadora.
 * - Cada línea tendrá un número o una operación representada por un
 *   símbolo (alternando ambos).
 * - Soporta números enteros y decimales.
 * - Soporta las operaciones suma "+", resta "-", multiplicación "*"
 *   y división "/".
 * - El resultado se muestra al finalizar la lectura de la última
 *   línea (si el .txt es correcto).
 * - Si el formato del .txt no es correcto, se indicará que no se han
 *   podido resolver las operaciones.
 */

//? Identificar si es número u operador
//? se puede verificar si es número con parseInt o con Number usando typeof
//? para ver si es operador podría utilizar una expresión regular
//? la idea es identificar si es número, pasar al siguiente, identificar el operador y pasar al siguiente,
//? si es número, aplicar la operación aritmética correspondiente al operador encontrado.

const fs = require('fs');
// function calculatorInterpret(file){

//   fs.readFile(file, 'utf8', (err, data) => {
    
//   if (err) {
//     console.error('Error al leer el archivo:', err);
//     return;
//   }
//   //console.log('resultado: ', data.replace(/\n/g, ' ').split(' '));
  
//   let result = data.split('\n');
//   //console.log('resultado: ', result);
  
//   //? Podría usar un switch para evaluar cada caso de operación aritmética

//   //? Usar una función auxiliar para obtener el operador de cada línea
//   //? Iterar de 3 en 3, donde en el segundo indice llamo a la función auxiliar para obtener el operador
//   //? una vez obtenido el operador asignarlo a una variable y luego usar un switch para aplicar la operación aritmética correspondiente

//   let total = parseFloat(result[0]);

//   for(let i = 1; i < result.length; i += 3){
//     let operator = result[i];
//     let priorNumber = parseFloat(result[i - 1]);
//     let nextNumber = parseFloat(result[i + 1]);

//     switch (operator) {
//       case '+':
//        total += nextNumber;  
//         break;
//       case '-':
//          total -= nextNumber;
//         break;
//       case '*':
//          total *= nextNumber;
//         break;
//       case '/':
//          total /= nextNumber;
//         break;
//       default: console.log('Operador no válido');
      
//         break;
//     }
    
//   }
  
//   console.log(total);
//   return total;
//   })
  
// }
// calculatorInterpret('calculadora.txt')

const fileContent = fs.readFileSync("calculadora.txt", "utf8");
const lines = fileContent.trim().split(/\r?\n/);

// 1) Tokenizar
const tokens = lines.map(l => {
  const t = l.trim();
  if (["+", "-", "*", "/"].includes(t)) return t;
  const n = parseFloat(t);
  if (isNaN(n)) throw new Error("Formato inválido");
  return n;
});

// 2) Primera pasada: *, /
function aplicarMultDiv(tokens) {
  const out = [];
  let i = 0;
  while (i < tokens.length) {
    const tk = tokens[i];
    if (tk === "*" || tk === "/") {
      const left = out.pop();
      const right = tokens[i+1];
      if (typeof right !== "number") throw new Error("Formato inválido");
      const res = tk === "*" ? left * right : left / right;
      out.push(res);
      i += 2; // saltamos el operador y el número
    } else {
      out.push(tk);
      i++;
    }
  }
  return out;
}

// 3) Segunda pasada: +, -
function aplicarSumaResta(tokens) {
  let result = tokens[0];
  for (let j = 1; j < tokens.length; j += 2) {
    const op = tokens[j];
    const num = tokens[j+1];
    if (op === "+") result += num;
    else if (op === "-") result -= num;
    else throw new Error("Operador inesperado");
  }
  return result;
}

try {
  const paso1 = aplicarMultDiv(tokens);
  const resultado = aplicarSumaResta(paso1);
  console.log("Resultado:", resultado); // ⇒ -14
} catch (err) {
  console.error("No se han podido resolver las operaciones.");
}
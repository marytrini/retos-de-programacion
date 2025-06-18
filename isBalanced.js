//? 11.- Expresiones equilibradas
/*
 * Crea un programa que comprueba si los paréntesis, llaves y corchetes
 * de una expresión están equilibrados.
 * - Equilibrado significa que estos delimitadores se abren y cierran
 *   en orden y de forma correcta.
 * - Paréntesis, llaves y corchetes son igual de prioritarios.
 *   No hay uno más importante que otro.
 * - Expresión balanceada: { [ a * ( c + d ) ] - 5 }
 * - Expresión no balanceada: { a * ( c + d ) ] - 5 }
 */

function isBalanced(exp) {
  const stack = [];
  const brackets = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let char of exp) {
    if (brackets[char]) {
      stack.push(char);
    } else if (Object.values(brackets).includes(char)) {
      if (stack.length === 0 || brackets[stack.pop()] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
console.log(isBalanced("{ [ a * ( c + d ) ] - 5 }"));
console.log(isBalanced("{ a *[ ( c + d ) ]} - 5 }"));
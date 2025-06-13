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
//fibonacci(50);

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
//isPrime({array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]});

//? 5.- Área de un polígono
/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */
function calculateArea(polygon) {
  switch (polygon.type) {
    case "triángulo":
      return (polygon.base * polygon.height) / 2;
    case "cuadrado":
      return polygon.side * polygon.side;
    case "rectángulo":
      return polygon.width * polygon.height;
    default:
      throw new Error("Polígono no soportado");
  }
}
const triangle = { type: "triángulo", base: 6, height: 8 };
const square = { type: "cuadrado", side: 3 };
const rectangle = { type: "rectángulo", width: 6, height: 8 };
// console.log(`Área del triángulo: ${calculateArea(triangle)}`);
// console.log(`Área del cuadrado: ${calculateArea(square)}`);
// console.log(`Área del rectángulo: ${calculateArea(rectangle)}`);

//? 7.- Invirtiendo cadenas
/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
//console.log(reverseString("Maria Trinidad"));

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
//console.log(countWords(text));

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
// console.log(decimalToBinary(10));
// console.log(decimalToBinary(255));

//? 10.- Código Morse
/*
 * Crea un programa que sea capaz de transformar texto natural a código
 * morse y viceversa.
 * - Debe detectar automáticamente de qué tipo se trata y realizar
 *   la conversión.
 * - En morse se soporta raya "—", punto ".", un espacio " " entre letras
 *   o símbolos y dos espacios entre palabras "  ".
 * - El alfabeto morse soportado será el mostrado en
 *   https://es.wikipedia.org/wiki/Código_morse.
 */
// function morseCodeConverter(input){
//  const morseCode = {
//     'A': '.-',
//     'B': '-...',
//     'C': '-.-.',
//     'D': '-..',
//     'E': '.',
//     'F': '..-.',
//     'G': '--.',
//     'H': '....',
//     'I': '..',
//     'J': '.---',
//     'K': '-.-',
//     'L': '.-..',
//     'M': '--',
//     'N': '-.',
//     'O': '---',
//     'P': '.--.',
//     'Q': '--.-',
//     'R': '.-.',
//     'S': '...',
//     'T': '-',
//     'U': '..-',
//     'V': '...-',
//     'W': '.--',
//     'X': '-..-',
//     'Y': '-.--',
//     'Z': '--..',
//     '0': '-----',
//     '1': '.----',
//     '2': '..---',
//     '3': '...--',
//     '4': '....-',
//     '5': '.....',
//     '6': '-....',
//     '7': '--...',
//     '8': '---..',
//     '9': '----.',
//  };

//  const reverseMorseCode = Object.fromEntries(
//     Object.entries(morseCode).map(([key, value]) => [value, key])
//  );
//  if(input.match(/^[.-\s]+$/)) {
//         return input.split('  ').map(word =>
//             word.split(' ').map(letter => reverseMorseCode[letter]).join('')
//         ).join(' ');
//     } else {
//         return input.toUpperCase().split('').map(letter =>
//             morseCode[letter] || ''
//         ).join(' ').replace(/ /g, '  ');
//     }
// }
// console.log(morseCodeConverter("Hola mundo"));
// console.log(morseCodeConverter(".... --- .-.. .- / -- ..- -. -.. ---"));

/**
 * Convierte una cadena de texto natural ⇄ código Morse.
 *
 * Si la entrada contiene al menos un carácter alfanumérico ([A-Za-z0-9]),
 * se interpreta como texto normal y se codifica a Morse.
 * Si contiene únicamente puntos (.) o rayas (—), se interpreta como Morse y se decodifica a texto.
 */
function decoder(input) {
  let decodedInput = "";

  const naturalDict = {
    A: ".—",
    N: "—.",
    0: "—————",
    B: "—...",
    Ñ: "——.——",
    1: ".————",
    C: "—.—.",
    O: "———",
    2: "..———",
    CH: "————",
    P: ".——.",
    3: "...——",
    D: "—..",
    Q: "——.—",
    4: "....—",
    E: ".",
    R: ".—.",
    5: ".....",
    F: "..—.",
    S: "...",
    6: "—....",
    G: "——.",
    T: "—",
    7: "——...",
    H: "....",
    U: "..—",
    8: "———..",
    I: "..",
    V: "...—",
    9: "————.",
    J: ".———",
    W: ".——",
    ".": ".—.—.—",
    K: "—.—",
    X: "—..—",
    ",": "——..——",
    L: ".—..",
    Y: "—.——",
    "?": "..——..",
    M: "——",
    Z: "——..",
    '"': ".—..—.",
    "/": "—..—",
  };

  const morseDict = {};

  for (const [key, value] of Object.entries(naturalDict)) {
    morseDict[value] = key;
  }

  const isNatural = /[A-Za-z0-9]/.test(input);

  if (isNatural) {
    const upper = input.toUpperCase();
    let i = 0;
    let skipNext = false;

    while (i < upper.length) {
      if (skipNext) {
        skipNext = false;
        i++;
        continue;
      }

      const char = upper[i];

      if (char !== " ") {
        if (char === "C" && i + 1 < upper.length && upper[i + 1] === "H") {
          decodedInput += naturalDict["CH"] + " ";
          skipNext = true;
        } else {
          const morseSymbol = naturalDict[char] || "";
          decodedInput += morseSymbol + " ";
        }
      } else {
        decodedInput += " ";
      }

      i++;
    }
  } else if (/[\.\—]/.test(input)) {
    const words = input.trim().split("  ");

    words.forEach((word, wi) => {
      const symbols = word.split(" ");
      symbols.forEach((symbol) => {
        if (symbol.length > 0 && morseDict[symbol]) {
          decodedInput += morseDict[symbol];
        }
      });
      if (wi < words.length - 1) {
        decodedInput += " ";
      }
    });
  }

  return decodedInput;
}

const naturalText = "Chocapic. Es una marca de cereales?";
const morseText = decoder(naturalText);
// console.log(morseText);

// console.log(decoder(morseText));

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
// console.log(isBalanced("{ [ a * ( c + d ) ] - 5 }"));
// console.log(isBalanced("{ a *[ ( c + d ) ]} - 5 }"));

//? 12.- Eliminando caracteres
/*
 * Crea una función que reciba dos cadenas como parámetro (str1, str2)
 * e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO
 *   estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO
 *   estén presentes en str1.
 */

function removeCharacters(str1, str2) {
  const out1 = str1
    .split("")
    .filter((ele) => !str2.includes(ele))
    .join("");
  const out2 = str2
    .split("")
    .filter((ele) => !str1.includes(ele))
    .join("");
  return { out1, out2 };
}

const result = removeCharacters("hola mundo", "mundo feliz");
// console.log(`out1: ${result.out1}`);
// console.log(`out2: ${result.out2}`);

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

// console.log(isPalindrome("Ana lleva al oso la avellana"));
// console.log(isPalindrome("Hola,aloh"));

//? 14.- Factorial recursivo
/*
 * Escribe una función que calcule y retorne el factorial de un número dado
 * de forma recursiva.
 */

function nFactorial(n) {
  if (n < 1) return 1;

  return n * nFactorial(n - 1);
}
//console.log(nFactorial(3));

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
//console.log(isArmstrongNumber(37));

//? 16.- ¿cuántos días?
/*
 * Crea una función que calcule y retorne cuántos días hay entre dos cadenas
 * de texto que representen fechas.
 * - Una cadena de texto que representa una fecha tiene el formato "dd/MM/yyyy".
 * - La función recibirá dos String y retornará un Int.
 * - La diferencia en días será absoluta (no importa el orden de las fechas).
 * - Si una de las dos cadenas de texto no representa una fecha correcta se
 *   lanzará una excepción.
 */
function howManyDays(date1, date2) {
  const dayInMilisec = 1000 * 60 * 60 * 24;

  let d1 = date1.split("/").reverse().join("-");
  let d2 = date2.split("/").reverse().join("-");

  let parseDate1 = new Date(d1).getTime();
  let parseDate2 = new Date(d2).getTime();

  if (date1 !== null && date2 !== null && parseDate1 && parseDate2) {
    let diff = parseDate2 - parseDate1;
    let daysRemain = diff / dayInMilisec;
    //console.log(daysRemain);

    return daysRemain;
  }
}
howManyDays("15/01/2025", "01/02/2025");

//? 17.- En mayúscula
/*
 * Crea una función que reciba un String de cualquier tipo y se encargue de
 * poner en mayúscula la primera letra de cada palabra.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

function strToUpperCase(str) {
  //todo convertir en array con split, luego convierto el primer indice en mayúscula, luego separo el primer elemento y lo pusheo a un nuevo array para luego pushear los demás o concatenarlo

  let words = str
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");

  //console.log(words);
}
strToUpperCase("hola mundo");

//? 18.- La carrera de obstáculos
/*
 * Crea una función que evalúe si un/a atleta ha superado correctamente una
 * carrera de obstáculos.
 * - La función recibirá dos parámetros:
 *      - Un array que sólo puede contener String con las palabras
 *        "run" o "jump"
 *      - Un String que represente la pista y sólo puede contener "_" (suelo)
 *        o "|" (valla)
 * - La función imprimirá cómo ha finalizado la carrera:
 *      - Si el/a atleta hace "run" en "_" (suelo) y "jump" en "|" (valla)
 *        será correcto y no variará el símbolo de esa parte de la pista.
 *      - Si hace "jump" en "_" (suelo), se variará la pista por "x".
 *      - Si hace "run" en "|" (valla), se variará la pista por "/".
 * - La función retornará un Boolean que indique si ha superado la carrera.
 * Para ello tiene que realizar la opción correcta en cada tramo de la pista.
 */
const track = "__|__|__|__";

const actions = ["Run", "Run", "Jump", "Run", "Run", "Jump", "Run", "Run"];

function obstacleRace(actions, track) {
  let copyTrack = track.split("");
  let allGood = true;
  let finalTrack = "";

  for (let i = 0; i <= copyTrack.length; i++) {
    let runnerActions = actions[i];
    let trackD = copyTrack[i];

    if (runnerActions === "Run" && trackD === "_") {
      finalTrack = finalTrack + trackD;
    } else if (runnerActions === "Jump" && trackD === "|") {
      finalTrack = finalTrack + trackD;
    } else if (runnerActions === "Run" && trackD === "|") {
      finalTrack = "x" + trackD;
      allGood = false;
    } else if (runnerActions === "Jump" && trackD === "_") {
      finalTrack = "/" + trackD;
      allGood = false;
    }
  }
  //  console.log(finalTrack);

  return allGood;
}
obstacleRace(actions, track);

//? 19.- Tres en raya
/*
 * Crea una función que analice una matriz 3x3 compuesta por "X" y "O"
 * y retorne lo siguiente:
 * - "X" si han ganado las "X"
 * - "O" si han ganado los "O"
 * - "Empate" si ha habido un empate
 * - "Nulo" si la proporción de "X", de "O", o de la matriz no es correcta.
 *   O si han ganado los 2.
 * Nota: La matriz puede no estar totalmente cubierta.
 * Se podría representar con un vacío "", por ejemplo.
 */

const matrix = [
  ["X", "O", ""],
  ["X", "", ""],
  ["X", "O", ""],
];

const analizeWinner = (matrix) => {
  function getPosition(control, matrix, axis = 'x') {
    if(axis == 'x'){
        return matrix.map((x) => {
            return x.map((y) => {
                return y === '' ? null : control === y;
            });
        });
    }else{
        const positions = [[],[],[]];
        for (let x = 0; x < matrix.length; x++) {
            for (let y = 0; y < matrix[x].length; y++) {
                const element = matrix[y][x];
                positions[x].push(control === element);
            }
        }
        return positions;
    }
  }

  function analizeAxis(matrix,callback){
    return matrix.every(callback) 
  }

  const positionsX = getPosition('X',matrix);
  const positionsY = getPosition('X',matrix,'y');

  for (let index = 0; index < positionsY.length; index++) {
    const col = positionsY[index];
    const row = positionsX[index];
    let winnerXCol = analizeAxis(col, (i) => i == true);
    let winnerOCol = analizeAxis(col, (i) => i == false);
    let winnerXRow = analizeAxis(row, (i) => i == true);
    let winnerORow = analizeAxis(row, (i) => i == false);
    if (winnerXCol || winnerXRow) {
    //    console.log('GANARON LAS X');
        break;
    } else if (winnerOCol || winnerORow) {
      //  console.log('GANARON LAS O');
        break;
    }
}

  //console.log(positionsX);
};

analizeWinner(matrix);

//? 20.- Conversor tiempo
/*
 * Crea una función que reciba días, horas, minutos y segundos (como enteros)
 * y retorne su resultado en milisegundos.
 */

function timeConversor(days, hours, min, sec){
    const secondsInADay = 24*60*60;
    const secondsInAnHour = 1*60*60;
    const secondsInAMinute = 60;

    const daySeconds = days * secondsInADay;
    const hourSeconds = hours * secondsInAnHour;
    const minSeconds = min * secondsInAMinute;

    let sum = daySeconds + hourSeconds + minSeconds + sec;

    let totalMilisec = sum* 1000;
  //console.log(totalMilisec);
  
    return totalMilisec;

}
timeConversor(2,48,60,30)

//? 21.- Parando el tiempo
/*
 * Crea una función que sume 2 números y retorne su resultado pasados
 * unos segundos.
 * - Recibirá por parámetros los 2 números a sumar y los segundos que
 *   debe tardar en finalizar su ejecución.
 * - Si el lenguaje lo soporta, deberá retornar el resultado de forma
 *   asíncrona, es decir, sin detener la ejecución del programa principal.
 *   Se podría ejecutar varias veces al mismo tiempo.
 */

//? usar setTimeout pasandole la función de suma como callback

function stopTime(a, b, sec){
  return new Promise ((resolve) => setTimeout(() =>{ resolve(a + b);}, (sec * 1000)));
}

// stopTime(5, 3, 1).then(r => console.log("Resultado A:", r));
// stopTime(10, 10, 3).then(r => console.log("Resultado B:", r));

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
function calculatorInterpret(file){
  let entries = [];
  let symbols = ['+', '-', '*', '/'];
  let total = 0;

  fs.readFile(file, 'utf8', (err, data) => {
    
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }
  //console.log('resultado: ', data.replace(/\n/g, ' ').split(' '));
  
  let result = data.split('\n');
  console.log('resultado: ', result);
  
  //? Podría usar un switch para evaluar cada caso de operación aritmética

  for(let i = 0; i <= result.length; i++){
    let entry = result[i].trim();
    if(entry === '') continue; // Ignorar líneas vacías

    if(!isNaN(entry)){ // Si es un número
      entries.push(Number(entry));
      if(entries.length === 1) total = Number(entry); // Inicializar total con el primer número
    } else if(symbols.includes(entry)){ // Si es un símbolo
      if(entries.length < 2) {
        console.error('Error: No hay suficientes números para realizar la operación');
        return;
      }
      let num2 = entries.pop(); // Sacar el último número
      let num1 = entries.pop(); // Sacar el penúltimo número

      switch(entry){
        case '+':
          total = num1 + num2;
          break;
        case '-':
          total = num1 - num2;
          break;
        case '*':
          total = num1 * num2;
          break;
        case '/':
          if(num2 === 0) {
            console.error('Error: División por cero');
            return;
          }
          total = num1 / num2;
          break;
        default:
          console.error('Error: Operador desconocido');
          return;
      }
      entries.push(total); // Agregar el resultado al array de entradas
    } else {
      console.error('Error: Entrada no válida', entry);
      return;
    }
    
  }
  console.log(entries);
  })
  

}
calculatorInterpret('calculadora.txt')


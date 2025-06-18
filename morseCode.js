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
console.log(morseText);
console.log(decoder(morseText));
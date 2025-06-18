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
        console.log('GANARON LAS X');
        break;
    } else if (winnerOCol || winnerORow) {
        console.log('GANARON LAS O');
        break;
    }
}

console.log(positionsX);
};

analizeWinner(matrix);
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
  console.log(finalTrack);

  return allGood;
}
obstacleRace(actions, track);
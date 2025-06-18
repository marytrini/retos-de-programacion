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
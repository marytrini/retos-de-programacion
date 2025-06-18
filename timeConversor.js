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
  console.log(totalMilisec);
  
    return totalMilisec;

}
timeConversor(2,48,60,30)
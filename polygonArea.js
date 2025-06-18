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

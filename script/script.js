let precioAdidas = '150';
let precioNike = '120';
let precioPuma = '90';

let stockAdidas = '10';
let stockNike = '8';
let stockPuma = '5';

let opcion = prompt('Qué zapatilla desea comprar? \n1-Adidas $' + (precioAdidas) + '\n2-Nike $' + (precioNike) + '\n3-Puma $' + (precioPuma));

switch (opcion) {
  case "1":
    let cantidad1 = parseInt(prompt('Cuantas zapatillas Adidas deseas comprar? \nStock: ' + (stockAdidas)));
    if (cantidad1 <= stockAdidas) {
      alert('El total de la compra es de $' + (cantidad1 * precioAdidas));
    } else {
      alert('No tenemos el stock suficiente.');
    }
    break;
  case "2":
    let cantidad2 = parseInt(prompt('"Cuantas zapatillas Nike deseas comprar? \nStock: ' + (stockNike)));
    if (cantidad2 <= stockNike) {
      alert('El total de la compra es de $' + (cantidad2 * precioNike));
    } else {
      alert('No tenemos el stock suficiente.');
    }
    break;
  case "3":
    let cantidad3 = parseInt(prompt('"Cuantas zapatillas Puma deseas comprar? \nStock: ' + (stockPuma)));
    if (cantidad3 <= stockPuma) {
      alert('El total de la compra es de $' + (cantidad3 * precioPuma));
    } else {
      alert('No tenemos el stock suficiente.');
    }
    break;
  default:
    alert("Opcion invalida");
}
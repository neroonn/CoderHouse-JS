

let infoAdidas = {
  modelo: 'Yeezy Boost',
  precio: 150,
  stock: 10,
}

let infoNike = {
  modelo: 'Jordan',
  precio: 120,
  stock: 8,
}
let infoPuma = {
  modelo: 'CA',
  precio: 90,
  stock: 5,
}

let opcion = prompt('Qué zapatilla desea comprar? \n1-Adidas $' + (infoAdidas.precio) + '\n2-Nike $' + (infoNike.precio) + '\n3-Puma $' + (infoPuma.precio));

switch (opcion) {
  case "1":
    let cantidad1 = parseInt(prompt('Cuantas zapatillas Adidas deseas comprar? \nStock: ' + (infoAdidas.stock)));
    if (cantidad1 <= infoAdidas.stock) {
      alert('El total de la compra es de $' + (cantidad1 * infoAdidas.precio));
    } else {
      alert('No tenemos el stock suficiente.');
    }
    break;
  case "2":
    let cantidad2 = parseInt(prompt('"Cuantas zapatillas Nike deseas comprar? \nStock: ' + (infoNike.stock)));
    if (cantidad2 <= infoNike.stock) {
      alert('El total de la compra es de $' + (cantidad2 * infoNike.precio));
    } else {
      alert('No tenemos el stock suficiente.');
    }
    break;
  case "3":
    let cantidad3 = parseInt(prompt('"Cuantas zapatillas Puma deseas comprar? \nStock: ' + (infoPuma.stock)));
    if (cantidad3 <= infoPuma.stock) {
      alert('El total de la compra es de $' + (cantidad3 * infoPuma.precio));
    } else {
      alert('No tenemos el stock suficiente.');
    }
    break;
  default:
    alert("Opcion invalida");
}
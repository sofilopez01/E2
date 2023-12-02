const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 60,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

//a)  Las pizzas que tengan un id impar.
function IdImpar(pizzas) {
  for (let i = 0; i < pizzas.length; i++) {
    const pizza = pizzas[i];
    if (pizza.id % 2 !== 0) {
      console.log(`Pizza ID: ${pizzas[i].id}`);
      console.log(`Nombre: ${pizzas[i].nombre}`);
      console.log(`Precio: ${pizzas[i].precio}`);
      console.log(`Ingredientes: ${pizzas[i].ingredientes.join(", ")}`);
      //console.log("----------------------");
    }
  }
}

//IdImpar(pizzas);

//b) Responder: ¿Hay alguna pizza que valga menos de $600?
function pizzaMenor600(pizzas) {
  for (let i = 0; i < pizzas.length; i++) {
    const pizza = pizzas[i];
    if (pizza.precio < 600) {
      console.log(`Hay al menos una pizza que vale menos de $600`);
      console.log(` La ${pizzas[i].nombre}, tiene un valor de $${pizzas[i].precio}`);
      return;
    }
  }

  console.log(`No hay ninguna pizza con precio menor a $600.`);
}

pizzaMenor600(pizzas);

//c) El nombre de cada pizza con su respectivo precio.
function NombreYPrecio(pizzas) {
  for (let i = 0; i < pizzas.length; i++) {
    const pizza = pizzas[i];
    console.log(` ${pizza.nombre},  $${pizza.precio}`);
  }
}

//NombreYPrecio(pizzas);

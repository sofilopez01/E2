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
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

//a)  Las pizzas que tengan un id impar.
function imprimirPizzasIdImpar() {
  const pizzasIdImpar = pizzas.filter((pizza) => pizza.id % 2 !== 0);

  pizzasIdImpar.forEach((pizza) => {
    console.log(`
      (ID: ${pizza.id})
      Pizza ${pizza.nombre}
      Precio: $${pizza.precio}
      Ingredientes: ${pizza.ingredientes.join(", ")}
    `);
  });
}

//imprimirPizzasIdImpar();

//b) Responder: ¿Hay alguna pizza que valga menos de $600?

function imprimirPizzasEconomicas() {
  // Filtrar las pizzas con precio menor a $600
  const pizzasEconomicas = pizzas.filter((pizza) => pizza.precio < 600);

  pizzasEconomicas.forEach((pizza) => {
    console.log(`
    La pizza ${pizza.nombre}, tiene un valor de $${pizza.precio}`);
  });
}

//imprimirPizzasEconomicas();

//c) El nombre de cada pizza con su respectivo precio.
function imprimirNombreYPrecio() {
  const nombresYPrecios = pizzas.map(
    (pizza) => `La ${pizza.nombre},tiene un valor de $${pizza.precio}`
  );
  nombresYPrecios.forEach((nombrePrecio) => {
    console.log(nombrePrecio);
  });
}

//imprimirNombreYPrecio();

//d) Todos los ingredientes de cada pizza
function imprimirIngredientes() {
  // sobre cada pizza
  pizzas.forEach((pizza) => {
    console.log(`Ingredientes de ${pizza.nombre}:`);

    //sobre los ingredientes de la pizza
    pizza.ingredientes.forEach((ingrediente) => {
      console.log(`- ${ingrediente}`);
    });
  });
}

//imprimirIngredientes();

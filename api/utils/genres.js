const { Genre } = require("../models");

const genres = [
  {
    name: "Novela de Aventuras",
  },
  {
    name: "Novela de Ciencia Ficción",
  },
  {
    name: "Cuentos de Hadas",
  },
  {
    name: "Novela Gótica",
  },
  {
    name: "Novela Policiaca",
  },
  {
    name: "Romance Paranormal",
  },
  {
    name: "Novela Distópica",
  },
  {
    name: "Novela Fantástica",
  },
  {
    name: "Poesía",
  },
  {
    name: "Obra de Teatro",
  },
];

async function createGenres() {
  Genre.bulkCreate(genres).then(() => {
    console.log("GENRES todo bien");
  });
}

module.exports = createGenres;

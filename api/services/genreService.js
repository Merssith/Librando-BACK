const { Genre } = require("../models");

exports.findAll = () => {
  return Genre.findAll({ attributes: { exclude: ["bookId"] } });
};

exports.findById = (id) => {
  return Genre.findByPk(id, { attributes: { exclude: ["bookId"] } });
};

exports.create = (genre) => {
  return Genre.create(genre);
};

exports.change = async (id, changes) => {
  let genre = await Genre.findByPk(id);
  genre.update(changes);
  return genre;
};

exports.delete = (id) => {
  return Genre.destroy({ where: { id } });
};

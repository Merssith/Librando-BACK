const { Book } = require("../models");

exports.findAll = () => {
  return Book.findAll();
};

exports.findById = (id) => {
  return Book.findByPk(id);
};

exports.create = (product) => {
  return Book.create(product);
};

exports.change = (id, body) => {
  return Book.findByPk(id).then((product) => product.update(body));
};

exports.delete = (id) => {
  return Book.findByPk(id).then((product) => product.update({ deleted: true }));
};

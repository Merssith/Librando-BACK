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

exports.change = async (id, body) => {
  let product = await Book.findByPk(id);
  product.update(body);
  return product;
};

exports.delete = async (id) => {
  let product = await Book.findByPk(id);
  product.update({ deleted: true });
  return product;
};

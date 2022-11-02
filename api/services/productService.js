const { Product } = require("../models");

exports.findAll = () => {
  return Product.findAll();
};

exports.findById = (id) => {
  return Product.findByPk(id);
};

exports.create = (product) => {
  return Product.create(product);
};

exports.change = (id, body) => {
  return Product.findByPk(id).then((product) => product.update(body));
};

exports.delete = (id) => {
  return Product.destroy({ where: { id } });
};

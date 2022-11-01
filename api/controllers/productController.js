const { Product } = require("../models");

exports.index = (req, res) => {
  Product.findAll()
    .then((products) => res.status(200).send(products))
    .catch((err) => res.status(400).send(err));
};

exports.findById = (req, res) => {
  const id = req.params.id;
  Product.findByPk(id)
    .then((products) => res.status(200).send(products))
    .catch((err) => res.status(400).send(err));
};

exports.createProduct = (req, res) => {
  const product = req.body;
  Product.create(product)
    .then((productCreated) => res.status(201).send(productCreated))
    .catch((err) => res.status(400).send(err));
};

exports.changeProduct = (req, res) => {
  const id = req.params.productId;
  Product.findByPk(id)
    .then((product) => product.update(req.body))
    .then((updatedProduct) => res.send(updatedProduct));
};

exports.deleteProduct = (req, res) => {
  const id = req.params.productId;
  Product.destroy({ where: { id } })
    .then(() => res.status(204).send("Product deleted"))
    .catch((err) => res.status(404).send(err));
};

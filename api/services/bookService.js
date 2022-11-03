const { Book } = require("../models");

exports.findAll = () => {
  return Book.findAll();
};

exports.findById = (id) => {
  return Book.findByPk(id);
};

exports.create = (book) => {
  return Book.create(book);
};

exports.change = async (id, body) => {
  let book = await Book.findByPk(id);
  book.update(body);
  return book;
};

exports.delete = async (id) => {
  let book = await Book.findByPk(id);
  book.update({ deleted: true });
  return book;
};

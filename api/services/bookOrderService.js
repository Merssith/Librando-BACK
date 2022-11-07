const { BookOrder, Book } = require("../models");

exports.findAll = () => {
  return BookOrder.findAll();
};

exports.findByOrderId = async (id) => {
  let bookOrders = await BookOrder.findAll({
    where: { orderId: id },
  });
  for (i = 0; i < bookOrders.length; i++) {
    let bookId = bookOrders[i].bookId;
    let findBook = await Book.findByPk(bookId);
    bookOrders[i].dataValues.book = findBook;
  }
  return bookOrders;
};

exports.create = (bookOrder) => {
  return BookOrder.create(bookOrder);
};

const { BookOrder, Book, Order } = require("../models");

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

exports.create = async (bookOrder) => {
  let bookId = bookOrder.bookId;
  let book = await Book.findByPk(bookId);
  let bookPrice = book.price;
  let total = bookPrice * bookOrder.quantity;
  let newBookOrder = {
    quantity: bookOrder.quantity,
    total: total,
    orderId: bookOrder.orderId,
    bookId: bookId,
  };

  let order = await Order.findByPk(bookOrder.orderId);
  let orderTotal = order.total;
  await order.update({ total: orderTotal + total });

  return BookOrder.create(newBookOrder);
};

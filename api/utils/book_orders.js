const { BookOrder } = require("../models");

const book_orders = [
  {
    orderId: 1,
    quantity: 1,
    bookId: 1,
    total: 2000,
  },
  {
    orderId: 1,
    quantity: 2,
    bookId: 2,
    total: 3000,
  },
  {
    orderId: 2,
    quantity: 1,
    bookId: 3,
    total: 1500,
  },
];

async function createBookOrders() {
  BookOrder.bulkCreate(book_orders).then(() => {
    console.log("BOOK_ORDERS todo bien");
  });
}

module.exports = createBookOrders;

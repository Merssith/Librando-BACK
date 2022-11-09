const bookOrderService = require("../services/bookOrderService.js");

// No es necesario pasarle el total, lo autocalcula con el precio del libro por la cantidad.

const book_orders = [
  {
    orderId: 1,
    quantity: 1,
    bookId: 1,
  },
  {
    orderId: 1,
    quantity: 2,
    bookId: 2,
  },
  {
    orderId: 2,
    quantity: 1,
    bookId: 3,
  },
  {
    orderId: 2,
    quantity: 2,
    bookId: 1,
  },
];

async function createBookOrders() {
  for (let i = 0; i < book_orders.length; i++) {
    let bookOrder = book_orders[i];
    await bookOrderService.create(bookOrder);
  }
  console.log("BOOK_ORDERS todo bien");
}

module.exports = createBookOrders;

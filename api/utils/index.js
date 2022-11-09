const createStatus = require("./status");
const createPayments = require("./payments");
const createUsers = require("./users");
const createBooks = require("./books");
const createReviews = require("./reviews");
const createOrders = require("./orders");
const createBookOrders = require("./book_orders");

createBooks()
  .then(() => createUsers())
  .then(() => createPayments())
  .then(() => createStatus())
  .then(() => createOrders())
  .then(() => createBookOrders())
  .then(() => createReviews());

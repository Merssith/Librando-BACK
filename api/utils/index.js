const createGenres = require("./genres");
const createStatus = require("./status");
const createPayments = require("./payments");
const createUsers = require("./users");
const createBooks = require("./books");
const createReviews = require("./reviews");
const createOrders = require("./orders");
const createBookOrders = require("./book_orders");

/* const promises = [
  createGenres(),
  createStatus(),
  createPayments(),
  createUsers(),
  createBooks(),
  createOrders(),
  createBookOrders(),
  createReviews(),
]; */

/* Promise.all(promises); */

createGenres()
  .then(() => createBooks())
  .then(() => createUsers())
  .then(() => createPayments())
  .then(() => createStatus())
  .then(() => createOrders())
  .then(() => createReviews())
  .then(() => createBookOrders());

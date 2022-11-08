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

createBooks() // Ajustado
  .then(() => createUsers()) // No hace falta ajustar
  .then(() => createPayments()) // No hace falta ajustar
  .then(() => createStatus()) // No hace falta ajustar
  .then(() => createOrders()) // Ajustado
  .then(() => createReviews()) // Por ahora, no hace falta ajustar
  .then(() => createBookOrders()); // Ajustado

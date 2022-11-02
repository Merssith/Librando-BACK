const orderService = require("../services/orderService.js");

exports.index = (req, res) => {
  orderService
    .findAll()
    .then((orders) => res.status(200).send(orders))
    .catch((err) => res.status(400).send(err));
};

exports.createOrder = (req, res) => {
  const order = req.body;
  orderService
    .create(order)
    .then((orderCreated) => res.status(201).send(orderCreated))
    .catch((err) => res.status(400).send(err));
};

exports.getOrdersByUserId = (req, res) => {
  const userId = req.params.id;
  orderService
    .ordersByUser(userId)
    .then((orders) => res.status(200).send(orders))
    .catch((err) => res.status(400).send(err));
};

exports.changeOrderStatus = (req, res) => {
  const orderId = req.params.id;
  orderService
    .changeStatus(orderId)
    .then((statusChanged) => res.send(statusChanged))
    .catch((err) => res.status(400).send(err));
};

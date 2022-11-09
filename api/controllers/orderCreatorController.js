const orderCreatorService = require("../services/orderCreatorService.js");
//const emailService = require("../services/emailService");

exports.createFullOrder = (req, res) => {
  orderCreatorService
    .createFullOrder()
    .then((orders) => res.status(200).send(orders))
    .catch((err) => res.status(400).send(err));
};

const { Order } = require("../models");

const orders = [
  {
    userId: 1,
    statusId: 1,
    paymentMethodId: 1,
    total: 5000,
  },
  {
    userId: 2,
    statusId: 2,
    paymentMethodId: 3,
    total: 1500,
  },
];

async function createOrders() {
  Order.bulkCreate(orders).then(() => {
    console.log("ORDERS todo bien");
  });
}

module.exports = createOrders;

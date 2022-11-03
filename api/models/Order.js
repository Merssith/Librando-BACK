const Sequelize = require("sequelize");
const db = require("../config/db");

class Order extends Sequelize.Model {}

Order.init(
  {
    date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    total: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    paymentMethod: {
      type: Sequelize.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "order",
  }
);

module.exports = Order;

const Sequelize = require("sequelize");
const db = require("../config/db");

class Cart extends Sequelize.Model {}

Cart.init(
  {
    total: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "cart",
  }
);

module.exports = Cart;

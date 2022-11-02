const { User, Order, Status } = require("../models");

exports.findAll = () => {
  return Order.findAll();
};

exports.create = (order) => {
  return Order.create(order);
};

exports.ordersByUser = async (id) => {
  let user = await User.findOne({ where: { id } });
  let orders = await Order.findAll({ where: { userId: user.id } });
  return orders;
};

exports.changeOrderStatus = async (id) => {
  let order = await Order.findByPk(id);
  let status = order.status_id;
  order.update({ status_id: status + 1 });
  return order;
};

const User = require("./User");
const Book = require("./Book");
const Order = require("./Order");
const Review = require("./Review");
const PaymentMethod = require("./PaymentMethod");
const Status = require("./Status");
const BookOrder = require("./BookOrder");
const Cart = require("./Cart");

Order.hasOne(Status);
Order.hasOne(PaymentMethod);
Order.hasMany(BookOrder);
Order.belongsTo(User);

User.hasMany(Order);
User.hasMany(Review);

Status.belongsTo(Order);

PaymentMethod.belongsTo(Order);

BookOrder.belongsTo(Order);
BookOrder.hasOne(Book);

Book.hasMany(Review);

Review.belongsTo(Book);
Review.belongsTo(User);

Cart.hasMany(BookOrder);

module.exports = {
  User,
  Book,
  Order,
  Review,
  PaymentMethod,
  Status,
  BookOrder,
  Cart,
};

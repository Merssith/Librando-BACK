const User = require("./User");
const Book = require("./Book");
const Order = require("./Order");
const Review = require("./Review");
const PaymentMethod = require("./PaymentMethod");
const Status = require("./Status");
const BookOrder = require("./BookOrder");

Order.hasOne(Status);
Order.hasOne(PaymentMethod);
Order.hasMany(BookOrder);
Order.belongsTo(User);

User.hasMany(Order);
User.hasMany(Review);

Status.hasMany(Order);

PaymentMethod.hasMany(Order);

BookOrder.hasOne(Order);
BookOrder.hasOne(Book);

Book.hasMany(Review);
Book.hasMany(BookOrder);

Review.belongsTo(Book);
Review.belongsTo(User);

module.exports = {
  User,
  Book,
  Order,
  Review,
  PaymentMethod,
  Status,
  BookOrder,
};

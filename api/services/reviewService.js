const { Review } = require("../models");

exports.findAll = () => {
  return Review.findAll();
};

exports.getByBookId = async (bookId) => {
  let reviews = await Review.findAll({ where: { bookId: bookId } });
  return reviews;
};

exports.getRatesAvgByBookId = async (bookId) => {
  let reviews = await Review.findAll({ where: { bookId: bookId } });
  if (!reviews.length) {
    return [{ promedio: 0 }];
  } else {
    let acum = 0;
    for (i = 0; i < reviews.length; i++) {
      acum += reviews[i].rate;
    }
    return [{ promedio: Math.round(acum / reviews.length) }];
  }
};

exports.create = (review) => {
  return Review.create(review);
};

const { Review } = require("../models");

const reviews = [
  {
    comment: "No es tan bueno",
    rate: 2,
    userId: 1,
    bookId: 2,
  },
  {
    comment: "Magnifico",
    rate: 5,
    userId: 2,
    bookId: 1,
  },
];

async function createReviews() {
  Review.bulkCreate(reviews).then(() => {
    console.log("REVIEWS todo bien");
  });
}

module.exports = createReviews;

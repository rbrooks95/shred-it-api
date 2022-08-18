const { Reviews, sequelize } = require("../models");
const { Op, literal, fn, col } = require("sequelize");

function stringify(data) {
  console.log(JSON.stringify(data, null, 2));
}
//seeing all reviews
// the path for it http://localhost:3001/api/reviews/feed
const GetReviews = async (req, res) => {
  try {
    const reviews = await Reviews.findAll({});
    res.send(reviews);
  } catch (error) {
    throw error;
  }
};

// creating a new review
// the path for it http://localhost:3001/api/reviews/:user_id
const CreateReview = async (req, res) => {
  try {
    let ownerId = parseInt(req.params.user_id);
    let reviewBody = {
      ownerId,
      ...req.body,
    };
    let review = await Reviews.create(reviewBody);
    res.send(review);
  } catch (error) {
    throw error;
  }
};

// updating a review
// the path for it http://localhost:3001/api/reviews/:user_id
const UpdateReview = async (req, res) => {
  try {
    let reviewId = parseInt(req.params.user_id);
    let updateReview = await Reviews.update(req.body, {
      where: { id: reviewId },
      returning: true,
    });
    res.send(updateReview);
  } catch (error) {
    throw error;
  }
};

// deletes the update
// the path http://localhost:3001/api/reviews/user_id
const DeleteReview = async (req, res) => {
  try {
    let reviewId = parseInt(req.params.user_id);
    let deleteReview = await Reviews.destroy({
      where: { id: reviewId },
    });
    res.send({ message: `Deleted Review with an id of ${reviewId}` });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  CreateReview,
  UpdateReview,
  GetReviews,
  DeleteReview,
};

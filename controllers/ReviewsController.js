const { Reviews, sequelize } = require("../models");
const { Op, literal, fn, col } = require("sequelize");

function stringify(data) {
  console.log(JSON.stringify(data, null, 2));
}

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
const UpdateReview = async (req, res) => {
  try {
    let reviewId = parseInt(req.params.twert_id);
    let updateReview = await Reviews.update(req.body, {
      where: { id: reviewId },
      returning: true,
    });
    res.send(updateReview);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  CreateReview,
  UpdateReview,
};

const Router = require("express").Router();
const controller = require("../controllers/ReviewsController");

Router.get("/feed", controller.GetReviews);
Router.post("/:user_id", controller.CreateReview);

module.exports = Router;

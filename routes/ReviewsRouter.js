const Router = require("express").Router();
const controller = require("../controllers/ReviewsController");

Router.get("/feed", controller.GetReviews);
Router.post("/:user_id", controller.CreateReview);
Router.put("/:user_id", controller.UpdateReview);

module.exports = Router;

const Router = require("express").Router();
const ReviewRouter = require("./ReviewsRouter");

Router.use("/reviews", ReviewRouter);

module.exports = Router;

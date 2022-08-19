const Router = require("express").Router();
const ReviewRouter = require("./ReviewsRouter");
const AuthRouter = require("./AuthRouter");

Router.use("/reviews", ReviewRouter);
Router.use("/auth", AuthRouter);

module.exports = Router;

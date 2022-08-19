const { User } = require("../models");
const middleware = require("../middleware");

const Login = async (req, res) => {
  try {
  } catch (error) {
    throw error;
  }
};

const Register = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    let passwordDigest = await middleware.hashPassword(password);
    console.log({ email, passwordDigest, name });
    const user = await User.create({ email, passwordDigest, name });
    console.log(user);
    res.send(user);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  Register,
  Login,
};

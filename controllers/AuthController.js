const { User } = require("../models");
const middleware = require("../middleware");
const { use } = require("../routes/AppRouter");

const Login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
      raw: true,
    });
    if (
      user &&
      (await middleware.comparePassword(user.passwordDigest, req.body.password))
    ) {
      let payload = {
        id: user.id,
        email: user.email,
      };
      let token = middleware.createToken(payload);
      return res.send({ user: payload, token });
    }
    res.status(401).send({ status: "Error", msg: "Unauthorized" });
  } catch (error) {
    throw error;
  }
};

// creating a new user
// the url is http://localhost:3001/api/auth/register
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

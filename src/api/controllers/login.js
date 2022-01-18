const {
  loginService,
} = require('../services/login');

const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const token = await loginService(email, password);
    return res.status(200).json(token);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = {
  loginController,
};
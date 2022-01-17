const {
  createUserService,
} = require('../services/users');

const createUserController = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;
    const user = await createUserService(name, email, password, role);
    return res.status(201).json(user);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = {
  createUserController,
};
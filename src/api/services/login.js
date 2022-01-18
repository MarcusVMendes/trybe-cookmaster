const {
  loginModel,
} = require('../models/login');
const { userSchema } = require('../utils/validate');
const { errorMessage } = require('../utils/errorMessage');

const loginService = async (email, password) => {
  if (!email || !password) throw errorMessage(401, 'All fields must be filled');
  const { error } = userSchema.validate({ email, password });
  if (error) throw errorMessage(401, 'Incorrect username or password');
  const userIsAuthenticated = await loginModel(email, password);
};

module.exports = {
  loginService,
};
const { findUserByEmailModel } = require('../models/users');
const { errorMessage } = require('../utils/errorMessage');
const { createToken } = require('../utils/token');

const loginService = async (userEmail, pass) => {
  if (!userEmail || !pass) throw errorMessage(401, 'All fields must be filled');
  const user = await findUserByEmailModel(userEmail);
  if (!user || pass !== user.password) throw errorMessage(401, 'Incorrect username or password');
  const { email, role } = user;
  const userData = { email, role };
  const token = createToken(userData);
  return { token };
};

module.exports = {
  loginService,
};
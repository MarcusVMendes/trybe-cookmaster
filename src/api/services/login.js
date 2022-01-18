const { findUserByEmailModel } = require('../models/users');
const { errorMessage } = require('../utils/errorMessage');
const { createToken } = require('../utils/token');

const loginService = async (userEmail, pass) => {
  if (!userEmail || !pass) throw errorMessage(401, 'All fields must be filled');
  const user = await findUserByEmailModel(userEmail);
  if (!user || pass !== user.password) throw errorMessage(401, 'Incorrect username or password');
  const { id, email, role } = user;
  const token = createToken(id, email, role);
  return { token };
};

module.exports = {
  loginService,
};
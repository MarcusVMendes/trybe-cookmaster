const {
  createUserModel,
  findUserByEmailModel,
} = require('../models/users');
const { userSchema } = require('../utils/validate');

const errorMessage = (status, message) => ({ status, message });

const createUserService = async (name, email, password, role = 'user') => {
  const { error } = await userSchema.validate({ name, email, password });
  if (error) throw errorMessage(400, 'Invalid entries. Try again.');
  const emailExists = await findUserByEmailModel(email);
  if (emailExists) throw errorMessage(409, 'Email already registered');
  const { id } = await createUserModel(name, email, password, role);
  return {
    user: {
      name,
      email,
      role,
      _id: id,
    },
  };
};

module.exports = {
  createUserService,
};
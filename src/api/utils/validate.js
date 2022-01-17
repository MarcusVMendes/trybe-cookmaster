const Joi = require('@hapi/joi');

const validEmail = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required().regex(validEmail),
  password: Joi.string().required(),
});

module.exports = {
  userSchema,
};
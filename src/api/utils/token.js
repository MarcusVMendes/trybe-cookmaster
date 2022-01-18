const jwt = require('jsonwebtoken');

const API_SECRET = 's21asd5a4sd8asdasd84a8sd4';

const JWT_CONFIG = {
  expiresIn: 3600,
  algorithm: 'HS256',
};

const createToken = (...data) => jwt.sign({ data }, API_SECRET, JWT_CONFIG);

const validateToken = (token) => console.log(token);

module.exports = {
  createToken,
  validateToken,
};
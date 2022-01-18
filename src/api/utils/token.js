const jwt = require('jsonwebtoken');

const API_SECRET = 's21asd5a4sd8asdasd84a8sd4';

const JWT_CONFIG = {
  expiresIn: 3600,
  algorithm: 'HS256',
};

const createToken = (data) => 
  // console.log(data);
   jwt.sign({ data }, API_SECRET, JWT_CONFIG);
const validateToken = (token) => {
  try {
    const decoded = jwt.verify(token, API_SECRET);
    const { email } = decoded;
    return email;
  } catch (err) {
    console.log('Falha na verificação do token');
    return null;
  }
};

module.exports = {
  createToken,
  validateToken,
};
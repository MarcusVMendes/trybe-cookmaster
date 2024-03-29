const { validateToken } = require('../utils/token');

const auth = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: 'missing auth token' });
    const user = validateToken(authorization);
    if (!user) return res.status(401).json({ message: 'jwt malformed' });
    req.user = user;
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: 'jwt malformed' });
  }
};

module.exports = auth;
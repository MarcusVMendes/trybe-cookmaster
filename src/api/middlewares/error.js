module.exports = (err, req, res, _next) => {
  console.log(err);

  return res.status(400).json(err.message);
};
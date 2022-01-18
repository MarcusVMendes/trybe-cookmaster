const {
  createRecipeService,
} = require('../services/recipes');

const createRecipeController = async (req, res, next) => {
  try {
    const { name, ingredients, preparation } = req.body;
    const { authorization: token } = req.header;
    const recipe = await createRecipeService(name, ingredients, preparation, token);
    return res.status(201).json(recipe);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = {
  createRecipeController,
};
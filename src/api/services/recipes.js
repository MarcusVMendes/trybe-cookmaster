const { ObjectId } = require('mongodb');

const {
  createRecipeModel,
  getRecipeByIdModel,
} = require('../models/recipes');

const { recipeSchema } = require('../utils/validate');
const { errorMessage } = require('../utils/errorMessage');
const { validateToken } = require('../utils/token');
const { findUserByEmailModel } = require('../models/users');

const createRecipeService = async (name, ingredients, preparation, token) => {
  const { error } = await recipeSchema.validate({ name, ingredients, preparation });
  if (error) throw errorMessage(400, 'Invalid entries. Try again.');
  const email = await validateToken(token);
  if (!email) throw errorMessage(401, 'jwt malformed');
  const { id } = await createRecipeModel(name, ingredients, preparation);
  const { insertedId } = await findUserByEmailModel(email);
  return {
    recipe: {
      name,
      ingredients,
      preparation,
      userId: insertedId,
      _id: id,
    },
  };
};

const getRecipeByIdService = async (id) => {
  const validId = ObjectId.isValid(id);
  if (!validId) throw errorMessage(404, 'recipe not found');
  const recipe = await getRecipeByIdModel(id);
  return recipe;
};

module.exports = {
  createRecipeService,
  getRecipeByIdService,
};
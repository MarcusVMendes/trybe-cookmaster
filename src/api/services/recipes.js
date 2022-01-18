const {
  createRecipeModel,
} = require('../models/recipes');
const { recipeSchema } = require('../utils/validate');
const { errorMessage } = require('../utils/errorMessage');
const { validateToken } = require('../utils/token');
const { findUserByEmailModel } = require('../models/users');

const createRecipeService = async (name, ingredients, preparation, token) => {
  const { error } = await recipeSchema.validate({ name, ingredients, preparation });
  if (error) throw errorMessage(400, 'Invalid entries. Try again.');
  const email = await validateToken(token);
  console.log(email);
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

// name, ingredients, preparation

module.exports = {
  createRecipeService,
};
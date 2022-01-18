const {
  createRecipeModel,
} = require('../models/recipes');
const { recipeSchema } = require('../utils/validate');
const { errorMessage } = require('../utils/errorMessage');
const { validateToken } = require('../utils/validate');

const createRecipeService = async (...data) => {
  const [name, ingredients, preparation, token] = data;
  const { error } = await recipeSchema.validate({ name, ingredients, preparation });
  if (error) throw errorMessage(400, 'Invalid entries. Try again.');
  const checkToken = await validateToken(token);
  // arrumar funçao de verificacao de token
  if (!checkToken) throw errorMessage(401, 'jwt malformed');
  const { id } = await createRecipeModel(name, ingredients, preparation);
  // pegar o email do usuario pelo token
  // com o email descobrir qual id do usuario e colocar no userId
  return {
    recipe: {
      name,
      ingredients,
      preparation,
      userId,
      _id: id,
    },
  };
};

// name, ingredients, preparation

module.exports = {
  createRecipeService,
};
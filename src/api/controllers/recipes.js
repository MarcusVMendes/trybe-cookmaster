const {
  createRecipeService,
  getRecipeByIdService,
  editRecipeService,
  deleteRecipeService,
} = require('../services/recipes');
const { getAllRecipesModel } = require('../models/recipes');

const createRecipeController = async (req, res, next) => {
  try {
    const { name, ingredients, preparation } = req.body;
    const { authorization: token } = req.headers;
    const recipe = await createRecipeService(name, ingredients, preparation, token);
    return res.status(201).json(recipe);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const getAllRecipesController = async (_req, res, next) => {
  try {
    const recipes = await getAllRecipesModel();
    return res.status(200).json(recipes);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const getRecipeByIdController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const recipe = await getRecipeByIdService(id);
    return res.status(200).json(recipe);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const editRecipeController = async (req, res, next) => {
  try {  
    const recipe = await editRecipeService(req);
    return res.status(200).json(recipe);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const deleteRecipeController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { authorization: token } = req.headers;
    const deletedRecipe = await deleteRecipeService(id, token);
    return res.status(204).json(deletedRecipe);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = {
  createRecipeController,
  getAllRecipesController,
  getRecipeByIdController,
  editRecipeController,
  deleteRecipeController,
};
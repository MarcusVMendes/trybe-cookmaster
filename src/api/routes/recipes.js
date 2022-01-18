const router = require('express').Router();
const {
  createRecipeController,
  getAllRecipesController,
  getRecipeByIdController,
} = require('../controllers/recipes');

router.post('/', createRecipeController);
router.get('/', getAllRecipesController);
router.get('/:id', getRecipeByIdController);

module.exports = router;
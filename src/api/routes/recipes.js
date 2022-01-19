const router = require('express').Router();
const {
  createRecipeController,
  getAllRecipesController,
  getRecipeByIdController,
  editRecipeController,
} = require('../controllers/recipes');

router.post('/', createRecipeController);
router.get('/', getAllRecipesController);
router.get('/:id', getRecipeByIdController);
router.put('/:id', editRecipeController);

module.exports = router;
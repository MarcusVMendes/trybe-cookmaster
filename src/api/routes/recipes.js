const router = require('express').Router();
const {
  createRecipeController,
  getAllRecipesController,
  getRecipeByIdController,
  editRecipeController,
  deleteRecipeController,
} = require('../controllers/recipes');

router.post('/', createRecipeController);
router.get('/', getAllRecipesController);
router.get('/:id', getRecipeByIdController);
router.put('/:id', editRecipeController);
router.delete('/:id', deleteRecipeController);

module.exports = router;
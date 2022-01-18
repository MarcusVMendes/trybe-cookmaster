const router = require('express').Router();
const {
  createRecipeController,
  getAllRecipesController,
} = require('../controllers/recipes');

router.post('/', createRecipeController);
router.get('/', getAllRecipesController);

module.exports = router;
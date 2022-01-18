const router = require('express').Router();
const {
  createRecipeController,
} = require('../controllers/recipes');

router.post('/', createRecipeController);

module.exports = router;
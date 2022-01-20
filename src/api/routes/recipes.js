const router = require('express').Router();
const {
  createRecipeController,
  getAllRecipesController,
  getRecipeByIdController,
  editRecipeController,
  deleteRecipeController,
  addRecipeImageController,
} = require('../controllers/recipes');
const { upload } = require('../utils/uploads');
const auth = require('../middlewares/auth');

router.post('/', createRecipeController);
router.get('/', getAllRecipesController);
router.get('/:id', getRecipeByIdController);
router.put('/:id', editRecipeController);
router.delete('/:id', deleteRecipeController);
router.put('/:id/image', auth, upload.single('image'), addRecipeImageController);

module.exports = router;
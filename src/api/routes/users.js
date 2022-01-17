const router = require('express').Router();
const {
  createUserController,
} = require('../controllers/users');

router.post('/', createUserController);

module.exports = router;
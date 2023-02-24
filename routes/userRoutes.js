const registerController = require('../controllers/userController');

const router = require('express').Router();

router.post('/register',registerController.register)

router.get('/login',registerController.login)


module.exports = router
const userID = require('./middlewares/userId.js')

const registerController = require('../controllers/userController');

const router = require('express').Router();

router.post('/register',registerController.register)

router.get('/login',registerController.login)

router.get('/sendUserId',userID)


module.exports = router
const userDetails = require('./middlewares/userDetails.js')

const registerController = require('../controllers/userController');

const router = require('express').Router();

router.post('/register',registerController.register)

router.get('/login',registerController.login)

router.get('/sendUserDetails',userDetails)


module.exports = router
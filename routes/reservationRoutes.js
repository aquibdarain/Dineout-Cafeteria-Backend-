const reservationController = require('../controllers/reservationController');
const router = require('express').Router();

router.post('/reservation',reservationController.add)

module.exports = router
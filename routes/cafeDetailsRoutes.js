const cafeController = require('../controllers/cafeController');
const upload = require("../middleware/upload");
const router = require('express').Router();

router.post('/addCafe',upload.single("file"), cafeController.addCafe)

router.get('/getCafeDetails', cafeController.getCafeDetails)

module.exports = router

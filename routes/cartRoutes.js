const jwt = require('jsonwebtoken');

function verifyToken(req, res, next){
    if(!req.headers.authorization){
        return res.status(401).send('unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null'){
        return res.status(401).send('unauthorized request')
    }
    let payload = jwt.verify(token, 'userToken')
    if(!payload){
        return res.status(401).send('unauthorized request')
    }
    req.id = payload.id
    next()
}

const cartController = require('../controllers/cartController');

const router = require('express').Router();

router.post('/addToCart',verifyToken,cartController.add)

router.get('/getCartDetails',verifyToken,cartController.getCartDetails)

router.delete('/deleteItem/:id',verifyToken,cartController.deleteProduct)

router.get('/findProduct/:id',verifyToken,cartController.findProduct)

router.put('/updateProduct/:productId',verifyToken,cartController.updateProduct)

router.delete('/destroyCart',verifyToken,cartController.destroyAll)

module.exports = router

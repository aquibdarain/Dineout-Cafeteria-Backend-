const jwt = require('jsonwebtoken');
module.exports = function verifyToken(req, res, next){
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
    // console.log(req.id);
    req.id = payload.id
    next()
}
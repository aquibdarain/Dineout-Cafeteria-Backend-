const db = require('../models/index');
const jwt = require('jsonwebtoken');

const User = db.user

const register = async (req, res) => {
    let info = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password,
    }
    try {
        let data = await User.create(info)
        // res.status(200).json(data);
        if(data){
            let payload = { subject: data.id }
            const token = jwt.sign(payload, process.env.JWT_SECRET)
    
            res.status(200).json({ token })
        }
    }
    catch (e) {
        console.log(e);
        e.errors.forEach((error) => {
            console.log(error.message);
            if (error.message == 'email must be unique') {
                res.status(403).json({
                    msg: "email already exist"
                })
            }
        });
    }
}

const login = async (req, res) => {

    try {
        let data = await User.findOne({ where: { email: req.query.email } });

        if (req.query.email == data.dataValues.email) {
            if (req.query.password == data.dataValues.password) {
                console.log(data.id);
                let payload = { id: data.id }
                const token = jwt.sign(payload, process.env.JWT_SECRET)

                res.status(200).json({ token })

            } else {
                res.status(400).json({
                    msg: "plz.. enter valid password"
                });
            }
        } else {
            res.status(400).json({
                msg: "plz.. enter valid email"
            });
        }
    }
    catch (e) {
        // console.log(e);  
        if (e) {
            console.log(e);
            res.json({
                msg: "Plz.. enter valid email"
            })
        }
    }
}

module.exports = {
    register,
    login
}
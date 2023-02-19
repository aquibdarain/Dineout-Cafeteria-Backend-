const db = require('../models/index');

const createReservation = db.reservation

const add = async (req, res)=>{
    let info = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        noOfPerson: req.body.noOfPerson,
        time: req.body.time,
        date: req.body.date
    }

    let data = await createReservation.create(info)
    res.status(200).json(data);
}

module.exports = {
    add
}
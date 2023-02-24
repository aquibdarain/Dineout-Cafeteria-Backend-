const fs = require("fs");
const db = require('../models/index');

const cafe = db.cafeDetails

const addCafe = async (req, res) => {
    try {
        // console.log(req.file);

        if (req.file == undefined) {
            return res.send(`You must select a file.`);
        }
        let obj = req.body
        var createObj = new cafe();
        // console.log("obj------------", obj);
        // console.log("createObj", createObj);
        for (let i = Object.keys(obj).length - 1; i >= 0; i--) {
            let key = Object.keys(obj)[i];
            if (obj[key] != "null") {
                createObj[key] = obj[key];
            } else {
                createObj[key] = null;
            }
        }

        if (req.file) {
            createObj.file = fs.readFileSync(__basedir + "/assets/uploads/" + req.file.filename);
        }
        console.log(req.file.filename);
        // const data = cafe.create({
        //     type: req.file.mimetype,
        //     name: req.file.originalname,
        //     cafeName: JSON.stringify(obj.cafeName),
        //     description: JSON.stringify(obj.description),
        //     price: JSON.stringify(obj.price),
        //     location: JSON.stringify(obj.location),
        //     file: fs.readFileSync(__basedir + "/assets/uploads/" + req.file.filename),
        // }).then((image) => {
        //     console.log(image);
        //     fs.writeFileSync(__basedir + "/assets/tmp/" + image.name,
        //         image.file
        //     );
        // })
        let result = await createObj.save();
        res.send(result)

    } catch (error) {
        console.log(error);
        return res.send(`Error when trying upload images: ${error}`);
    }
}

const getCafeDetails = async (req, res) => {
    let data = cafe.findAll({})
    data.then(function (result) {
        const arr = result.map(cafeDetails)
        // console.log(arr);
        res.status(200).json(arr);
    })
    function cafeDetails(cd) {
        // console.log(cd.dataValues);
        return { data: cd.dataValues }
    }
}

module.exports = {
    addCafe,
    getCafeDetails
}


const db = require('../models/index');

const cart = db.cart

const add = async (req, res) => {
    let info = {
        productName: req.body.productName,
        price: req.body.price,
        quantity: req.body.quantity,
        img: req.body.img,
        productId: req.body.productId

    }

    let data = await cart.create(info)
    res.status(200).json(data);
}

const getCartDetails = async (req, res) => {
    let data = await cart.findAll({});
    res.status(200).json(data);
}

const deleteProduct = async (req, res) => {

    let data = await cart.destroy({ where: { id: req.params.id }});
    res.status(200).json(data);
}

const findProduct = async (req, res) => {
    productId = req.params.id
    let data = await cart.findOne({ where: { productId: productId }});
    res.status(200).json(data);
}

const updateProduct = async (req, res) => {
    let obj = {
        quantity: req.body.quantity,
        price: req.body.price
    }
    let data = await cart.update(obj,{ where: { productId: req.params.productId }});
    res.status(200).json(data);
}

const destroyAll = async (req, res) => {
    let data = await cart.destroy({
        truncate : true
    });
    res.status(200).json(data);
}

module.exports = {
    add,
    getCartDetails,
    deleteProduct,
    findProduct,
    updateProduct,
    destroyAll
}

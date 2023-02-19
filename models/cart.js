module.exports = (sequelize, DataTypes)=>{
    const cart = sequelize.define('Cart',{
        productName: DataTypes.STRING,
        price: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER,
        img: DataTypes.STRING,
        productId: DataTypes.INTEGER,
        itemId: DataTypes.INTEGER
    },
    {
        timestamps : true
    })
    return cart
}

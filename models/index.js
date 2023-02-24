require("dotenv").config();

const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize(
    'food_order',
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql',
    })

sequelize.authenticate()
    .then(() => {
        console.log('connected');
    })
    .catch((error) => {
        console.log('error', error);
    })


const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.reservation = require('./reservation')(sequelize, DataTypes);
db.itemNo = require('./itemNo')(sequelize, DataTypes);
db.cart = require('./cart')(sequelize, DataTypes);
db.user = require('./user')(sequelize, DataTypes);

db.user.hasMany(db.cart, {
    foreignKey: 'itemId'
})
db.cart.belongsTo(db.user)

db.orderDetails = require('./orderDetails')(sequelize, DataTypes);

db.orderDetails = require('./orderDetails')(sequelize, DataTypes);

db.cafeDetails = require('./cafeDetails')(sequelize, Sequelize, DataTypes);

module.exports = db

db.sequelize.sync({ force: false })
    .then(() => {
        console.log("yes re-sync");
    })
    .catch()
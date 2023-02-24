module.exports = (sequelize, Sequelize, DataTypes) => {
    const cafe = sequelize.define('CafeDetails', {
        type: {
            type: DataTypes.STRING,
        },
        name: {
            type: DataTypes.STRING,
        },
        cafeName: DataTypes.STRING,
        description: DataTypes.STRING,
        price: DataTypes.STRING,
        location: DataTypes.STRING,
        file: {
            type: DataTypes.BLOB("long"),
        },


    },
        {
            timestamps: true
        })
    return cafe
}

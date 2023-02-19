module.exports = (sequelize, DataTypes)=>{
    const reservation = sequelize.define('reservation',{
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.INTEGER,
        noOfPerson: DataTypes.STRING,
        time: DataTypes.STRING,
        date: DataTypes.DATE
    },
    {
        timestamps : false
    })

    return reservation
}

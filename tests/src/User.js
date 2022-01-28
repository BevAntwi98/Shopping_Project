const { sequelize, DataTypes, Model } = require('../sequelize_index');
const {Basket}= require('./Basket')

class User extends Model {
    //properties

    //methods

}

User.init({
    name: DataTypes.STRING,

}, {
    sequelize,
    timestamps: false,
})

User.hasOne(Basket, { as: 'basket', foreignKey: 'user_id' })
Basket.belongsTo(User, { foreignKey: 'user_id' })

module.exports = { User };
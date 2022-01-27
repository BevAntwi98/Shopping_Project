const { sequelize, DataTypes, Model } = require('../sequelize_index');
const { Basket } = require('../Classes/Basket')

class User extends Model {

    //methods

}

User.init({
    name: DataTypes.STRING,

}, {
    sequelize,
    timestamps: false,
})



module.exports = { User };
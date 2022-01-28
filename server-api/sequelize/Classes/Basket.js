const { sequelize, DataTypes, Model } = require('../sequelize_index');
const { Item } = require('./Item');

class Basket extends Model {
    //methods

}

Basket.init({
    title: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    image: DataTypes.STRING,
    description: DataTypes.STRING
}, {
    sequelize,
    timestamps: false,
})
Basket.hasMany(Item, { as: 'items', foreignKey: 'basket_id' })
Item.belongsTo(Basket, { foreignKey: 'basket_id' })

module.exports = { Basket };
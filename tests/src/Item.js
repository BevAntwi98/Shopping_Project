const { sequelize, DataTypes, Model } = require('../sequelize_index');

class Item extends Model {
    
    //methods

}

Item.init({
    title: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    image: DataTypes.STRING,
    description: DataTypes.STRING
}, {
    sequelize,
    timestamps: false,
});

module.exports = { Item };
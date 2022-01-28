const { sequelize, DataTypes, Model } = require('../sequelize_index');
const { Item } = require('./Item');

class Category extends Model {
    
}

Category.init({
    name: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false,
});

Category.hasMany(Item, { as: "items", foreignKey: 'category_id' });
Item.belongsTo(Category, { foreignKey: 'category_id' });


module.exports = { Category };
const { sequelize } = require("../../sequelize/sequelize_index");
const { Item } = require("../../sequelize/Classes/Item");

describe('Item', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    })
    test('can create an item', async () => {
        const item = await Item.create({ title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price:102.95, description:'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday', category: "men's clothing", image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' });
        expect(item.price).toBe(102.95)
    })
})

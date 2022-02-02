const { sequelize } = require("../../sequelize/sequelize_index");
const { Basket } = require("../../sequelize/Classes/Basket");
const { Item } = require('../../sequelize/Classes/Item')

describe('Basket', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    })
    test('can add item ', async () => {
        //const item = await Item.create({ title: "Fjallraven", price:102.95, description:'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday', category: "men's clothing", image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' });
        //const items = [1,2,3,4]
        //const userBasket = new Basket(23)
        //Basket.addItems(item)
        //console.log(userBasket.items)
        //expect(Basket.items[0].title).toBe("Fjallraven")
    })
})
const { sequelize } = require("../../sequelize/sequelize_index");
const { Category } = require("../../sequelize/Classes/Category");
const { Item } = require("../../sequelize/Classes/Item");

describe('Category', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    })
    test('can add an item', async () => {
        const category = await Category.create({name: 'Jewellery'})
        const item = await Item.create({ title: "Fjallraven", price:102.95, description:'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday', category: "men's clothing", image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' });
        await category.addItem(item);
        const items = await Item.findAll()
        expect(items[0].title).toBe("Fjallraven")

    })
    test('can create Category', async()=>{
        const childrenCategory= await Category.create({name: "Children's Clothing"})
        expect(childrenCategory.name).toBe("Children's Clothing")
    })
    
})

// getItems() not working 
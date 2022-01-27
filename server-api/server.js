const express = require('express');
const fs = require('fs').promises;
const { sequelize } = require("./sequelize/sequelize_index");
const { Item } = require("./sequelize/Classes/Item");
const { Category } = require("./sequelize/Classes/Category");

const app = express();
const port = 8080;

const load = async() => {
    const buffer = await fs.readFile('./seed.json');
    const items  = JSON.parse(String(buffer));
    await sequelize.sync({ force: true });

    await Category.create({name: "Men's Clothing"});
    await Category.create({name: "Jewellery"});
    await Category.create({name: "Electronics"});
    await Category.create({name: "Women's Clothing"});

    let category_id = 0;
    for (let i = 0; i < items.length; i++) {
        switch (items[i].category) {
            case "men's clothing":
                category_id = 1;
                break;
            case "jewelry":
                category_id = 2;
                break;
            case "electronics":
                category_id = 3;
                break;
            case "women's clothing":
                category_id = 4;
                break;
        }
        await Item.create({title: items[i].title, price: items[i].price, image: items[i].image, description: items[i].description, category_id: category_id});
    }
}

load()
.catch(err => console.log(err));
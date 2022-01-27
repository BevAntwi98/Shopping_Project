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

    let category_id = 0;
    for (let i = 0; i < items.length; i++) {
        await Item.create({title: items[i].title, price: items[i].price, image: items[i].image, description: items[i].description});
    }
}

load().catch(err => console.log(err));
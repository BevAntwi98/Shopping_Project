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


    const categories = getCategories(items);

    for (let i in categories){
        await Category.create({name: categories[i]});
    }

    //query categories and sorting new items (category field) to match the existing values within category table. item.category_id = category.id
    let queryResult = await Category.findAll();

    let categoryNames = [];
    for (let j of queryResult){
        categoryNames.push(j.name);
    }

    let categoryID = 0;
    for (let i = 0; i < items.length; i++) {
        categoryID = (categoryNames.indexOf(items[i].category)+1);
        await Item.create({title: items[i].title, price: items[i].price, image: items[i].image, description: items[i].description, category_id: categoryID});
    }
}

const getCategories = (items) => {

    let categories = [];

    for (let i in items){
        if (categories.includes(items[i].category)){
        }else{
            categories.push(items[i].category);
        }
    }

    return categories;
}

load()
.catch(err => console.log(err));
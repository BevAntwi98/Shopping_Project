const cors = require("cors");
const express = require('express');
const { check, validationResult, body } = require('express-validator');
const fs = require('fs').promises;
const { sequelize } = require("./sequelize/sequelize_index");
const { Item } = require("./sequelize/Classes/Item");
const { Category } = require("./sequelize/Classes/Category");

const app = express();
const port = 8080;

const load = async () => {
    const buffer = await fs.readFile('./seed.json');
    const items = JSON.parse(String(buffer));
    await sequelize.sync({ force: true });


    const categories = getCategories(items);

    for (let i in categories) {
        await Category.create({ name: categories[i] });
    }

    //query categories and sorting new items (category field) to match the existing values within category table. item.category_id = category.id
    let queryResult = await Category.findAll();

    let categoryNames = [];
    for (let j of queryResult) {
        categoryNames.push(j.name);
    }

    let categoryID = 0;
    for (let i = 0; i < items.length; i++) {
        categoryID = (categoryNames.indexOf(items[i].category) + 1);
        await Item.create({ title: items[i].title, price: items[i].price, image: items[i].image, description: items[i].description, category_id: categoryID });
    }
}

const getCategories = (items) => {

    let categories = [];

    for (let i in items) {
        if (categories.includes(items[i].category)) {
        } else {
            categories.push(items[i].category);
        }
    }

    return categories;
}

load()
    .catch(err => console.log(err));

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/items", async (req, res) => { // GETS ALL ITEMS
    const items = await Item.findAll();
    res.json(items);
});

app.get("/items/:itemid", async (req, res) => { // GETS SPECIFIC ITEM
    if (!parseInt(req.params.itemid)) return res.sendStatus(400);

    const item = await Item.findByPk(req.params.itemid);
    res.json(item);
});

app.get("/categories", async (req, res) => { // GETS ALL CATEGORIES
    const categories = await Category.findAll();
    res.json(categories);
});

app.get("/categories/:id", async (req, res) => { // GETS SPECIFIC CATEGORY WITH ITEMS UNDER IT
    if (!parseInt(req.params.id)) return res.sendStatus(400);

    const category = await Category.findByPk(req.params.id, { include: { model: Item, as: "items" } });
    res.json(category);
});

app.post("/categories", [ // ADDS A CATEGORY
    check('name').trim().notEmpty().isLength({ max: 50 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const allCategories = await Category.findAll();
    allCategories.forEach(category => {
        if (category.name === req.body.name) return res.sendStatus(409);
    });

    await Category.create({ name: req.body.name });
    res.sendStatus(201);
});

app.post("/categories/:id/items", [ // ADDS AN ITEM WITH A CATEGORY
    check('title').trim().notEmpty(),
    check('price').trim().isFloat(),
    check('image').trim().isURL().exists(),
    check('description').trim().notEmpty()
], async (req, res) => {
    if (!parseInt(req.params.id)) return res.sendStatus(400);

    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    
    console.log({ title: req.body.title, price: req.body.price, image: req.body.image, description: req.body.description, category_id: req.params.id });
    await Item.create(
        { title: req.body.title, price: req.body.price, image: req.body.image, description: req.body.description, category_id: req.params.id }
    );
    res.sendStatus(201);
});

app.patch("/categories/:id", [ // UPDATES CATEGORY NAME
    check('name').trim().notEmpty().isLength({ max: 50 })
], async (req, res) => {
    if (!parseInt(req.params.id)) return res.sendStatus(400);

    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    await Category.update(
        { name: req.body.name },
        { where: { id: req.params.id } }
    );
    res.sendStatus(200);
});

app.patch("/items/:itemid", [ // UPDATES ITEM VALUES
    check('title').trim().notEmpty(),
    check('price').trim().isFloat(),
    check('image').trim().isURL().exists(),
    check('description').trim().notEmpty()
], async (req, res) => {
    if (!parseInt(req.params.itemid)) return res.sendStatus(400);

    let titleExist = true;
    let priceExist = true;
    let imageExist = true;
    let descExist = true;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const allErrors = errors.array();
        allErrors.forEach(error => {
            if (error.param === "title") titleExist = false;
            if (error.param === "price") priceExist = false;
            if (error.param === "image") imageExist = false;
            if (error.param === "description") descExist = false;
        });
        if (!titleExist && !priceExist && !imageExist && !descExist) return res.status(400).json({ errors: allErrors });
    }

    if (titleExist) await Item.update(
        { title: req.body.title },
        { where: { id: req.params.itemid } }
    );

    if (priceExist) await Item.update(
        { price: req.body.price },
        { where: { id: req.params.itemid } }
    );

    if (imageExist) await Item.update(
        { image: req.body.image },
        { where: { id: req.params.itemid } }
    );

    if (descExist) await Item.update(
        { description: req.body.description },
        { where: { id: req.params.itemid } }
    );
    res.sendStatus(200);
});

app.patch("/categories/items/:itemid", [ // UPDATES CATEGORY OF ITEM
    check('categoryId').trim().isInt(),
], async (req, res) => {
    if (!parseInt(req.params.itemid)) return res.sendStatus(400);

    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    await Item.update(
        { category_id: req.body.categoryId },
        { where: { id: req.params.itemid } }
    );

    res.sendStatus(200);
});

app.delete("/items/:id", async (req, res) => { // DELETES A SPECIFIC ITEM
    if (!parseInt(req.params.id)) return res.sendStatus(400);

    const item = await Item.findByPk(req.params.id);
    item.destroy();
    res.sendStatus(200);
});

app.delete("/categories/:id", async (req, res) => { // DELETES A SPECIFIC CATEGORY
    if (!parseInt(req.params.id)) return res.sendStatus(400);

    const category = await Category.findByPk(req.params.id);
    category.destroy();
    res.sendStatus(200);
})

app.listen(port, () => {
    console.log(`Server http://localhost:${port} is running`);
})
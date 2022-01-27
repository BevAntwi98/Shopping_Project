const { Item } = require("./Item");

class Basket {
    userId;
  items = [];

  constructor(userId) {
      this.userId = userId
  }

  addToBasket(item) {
    this.items.push(item);
    //console.log(items);
  }
}

module.exports = { Basket };

//const item = Item.create({ title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price:102.95, description:'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday', category: "men's clothing", image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' });
const items = [1, 2, 3, 4];
const userBasket = new Basket([])

userBasket.addToBasket(items);
console.log(userBasket.items);

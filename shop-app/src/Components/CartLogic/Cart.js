import ItemProduct from "./ItemProduct";
class Cart {
    constructor (id){
        this._content = [];
        this._id = id;
        this._valCounter = 0;
    }

    get valCounter(){
        return this._valCounter;
    }

    set valCounter(newValCounter)
    {
        return; 
    }
    get id(){
        return this._id;
    }

    set id(newID){
        this._id = newID;
    }
    get content(){
        return this._content;
    }

    getItemCount = (id) => {
        this._content.forEach(item => {
            if (item._id == id){
                return item._quantity;
            }
        });
    }

    get contentCount(){
        let contentCounter = 0;
        this._content.forEach(item => {
            contentCounter += item._quantity;
        });
        return contentCounter;
    }

    set content(newContent){
        this._content = newContent;
        this._valCounter = this.getContentCount();
        return;
    }

    addToCart = (element,quantity=1) => {
        this._valCounter += 1;
        if (!(this.checkAlreadyInBasket(this._content,element,quantity))){
            this._content.push(element);
        }
        
    };

    checkAlreadyInBasket = (arr,element,quantity) => {
        let found = false;
        arr.forEach(item => {
            if (item._id == element._id){
                this.setItemQuantity(element._id, (quantity+item._quantity))
                found = true;
            }
        });
        return found;
    }

    removeFromCart = (id) => {
        this._valCounter -= 1;
        this._content = this._content.filter(item => item.id !== id);
    }

    setItemQuantity = (id,newQuantity) => {

        this._content.forEach(item => {
            if (item._id == id){
                let difference = item._quantity - newQuantity;
                this._valCounter = this._valCounter - difference;
                item._quantity = newQuantity;
                if (newQuantity == 0){
                    this._content.splice(this._content.indexOf(item),1);
                }
                return;
            }
        });
    }

    static convertToCartObject(objContent){
        let tempCart = new Cart(0);
        objContent.forEach(item => {
            tempCart.addToCart(new ItemProduct(item._id, item._quantity));
        });
        return tempCart;
    }


}

export default Cart;
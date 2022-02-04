class ItemProduct {
    constructor(id,quantity){
        this._id = id;
        this._quantity = quantity;
    }

    get id(){
        return this._id;
    }

    get quantity(){
        return this._quantity;
    }

    set quantity(newQuantity){
        this._quantity = newQuantity;
    }

    set id(newId){
        this._id = newId;
    }
    
}

export default ItemProduct;
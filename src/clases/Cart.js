class Cart {
    constructor({id, timestamp, products}) {
        this.id = id;
        this.timestamp = timestamp ? timestamp : new Date();
        this.products = products ? products : [];
    }

    validateData() {
        if (!this.id)
            return false;
        if (!this.timestamp)
            return false;
        if (!this.products)
            return false;
        return true;
    }
}

module.exports = Cart;
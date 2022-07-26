import ContainerMongo from "../../containerMongo";

class CartDaoMongo extends ContainerMongo {
    constructor() {
        super("cart", {
            timestamp: {type: Date, required: true},
            products: {type: Array, required: true}
        })
    }
}

export default CartDaoMongo;
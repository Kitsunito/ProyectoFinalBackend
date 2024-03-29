import ContainerMongo from "../../containerMongo.js";

class ProductDaoMongo extends ContainerMongo {
    constructor() {
        super("products", {
            name: {type: String, required: true},
            description: {type: String, required: true},
            code: {type: Number, required: true},
            thumbnail: {type: String, required: false},
            price: {type: Number, required: true},
            stock: {type: Number, required: true}
        })
    }

}

export default ProductDaoMongo; 
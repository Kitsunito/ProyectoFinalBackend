import ContainerMongo from "../../containerMongo";

class ProductDaoMongo extends ContainerMongo {
    constructor() {
        super("products", {
            name: {type: String, required: true},
            description: {type: String, required: true},
            code: {type: Number, required: true},
            price: {type: Number, required: true}
        })
    }
}

export default ProductDaoMongo; 
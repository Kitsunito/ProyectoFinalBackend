import ContainerFirebase from "../../ContainerFirebase.js";

class ProductDaoFB extends ContainerFirebase {
    constructor () {
        super("products");
    }
}

export default ProductDaoFB;
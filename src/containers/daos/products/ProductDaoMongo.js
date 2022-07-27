import ContainerMongo from "../../containerMongo.js";

class ProductDaoMongo extends ContainerMongo {
    constructor() {
        super("products", {
            name: {type: String, required: true},
            description: {type: String, required: true},
            code: {type: Number, required: true},
            price: {type: Number, required: true}
        })
    }

    //Método para agregar un objeto
    async save(object) {
        try {
            const product =  await this.collection.insertMany(object);
            return newID;
        } catch (error) {
            console.log(`Error al guardar: ${error}`);
        }
    }
}

export default ProductDaoMongo; 
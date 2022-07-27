import config from "../../config.js";
import mongoose from 'mongoose';

await mongoose.connect(config.mongodb.connectionString);

class ContainerMongo{
    constructor(collectionName, schema) {
        this.collection = mongoose.model(collectionName, schema)
    }

    //GET de un documento
    async getById(id) {
        try {
            const mongooseId = mongoose.Types.ObjectId(id);
            console.log(mongooseId);
        } catch (error) {
            console.log(error);
        }
        await this.collection.findById(id);
        // const doc = await this.collection.find({'_id': id}, {__V: 0});
        // if (!doc) {
        //     const error = new Error('El producto no existe');
        //     error.statusCode = 404;
        //     throw error;
        // }

        //return doc;
    }

    //GET de todos los documentos
    async getAll(){
        const products = await this.collection.find();
        if (!products) {
            const error = new Error('Error al obtener la colección');
            error.statusCode=404;
            throw error;
        }
        return products;
    }

    //POST
    async save(object) {
        try {
            const product =  await this.collection.insertMany(object);
            return product;
        } catch (error) {
            console.log(`Error al guardar: ${error}`);
        }
    }
}

export default ContainerMongo;
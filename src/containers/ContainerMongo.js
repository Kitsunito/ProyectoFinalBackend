import config from "../../config.js";
import mongoose from 'mongoose';

await mongoose.connect(config.mongodb.connectionString);

class ContainerMongo{
    constructor(collectionName, schema) {
        this.collection = mongoose.model(collectionName, schema)
    }

    //GET de un documento
    async getById(id) {
        const product  = await this.collection.findById(id);

        if (!product) {
            const error = new Error('El producto no existe');
            error.statusCode = 404;
            throw error;
        }

        return product;
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
            const product =  await this.collection.insertMany(object);
            if (!product) {
                const error = new Error('Error al guardar el producto');
                throw error;
            }
            return product;
    }

    async updateById(id, object){
        const product = await this.collection.findOneAndUpdate({'_id': id}, object)
        if (!product) {
            const error = new Error('Error al actualizar el producto');
            throw error;
        }
        return product;
    }


    async deleteById(id){
        await this.collection.findByIdAndDelete({'_id': id});
        return `Se eliminó el elemento ${id} OK`;
    }
}

export default ContainerMongo;
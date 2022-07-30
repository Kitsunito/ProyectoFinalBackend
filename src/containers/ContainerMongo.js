import config from "../../config.js";
import mongoose from 'mongoose';

await mongoose.connect(config.mongodb.connectionString);

class ContainerMongo{
    constructor(collectionName, schema) {
        this.collection = mongoose.model(collectionName, schema)
    }

    //GET de un documento
    async getById(id) {
        const document  = await this.collection.findById(id);
        console.log(`Error: ${document}`)
        if (!document) {
            const error = new Error('El documento no existe');
            error.statusCode = 404;
            throw error;
        }

        return document;
    }

    //GET de todos los documentos
    async getAll(){
        const documents = await this.collection.find();
        if (!documents) {
            const error = new Error('Error al obtener la colección');
            error.statusCode=404;
            throw error;
        }
        return documents;
    }

    //POST
    async save(object) {
            const document =  await this.collection.insertMany(object);
            if (!document) {
                const error = new Error('Error al guardar el documento');
                throw error;
            }
            return document;
    }

    //PUT
    async updateById(id, object){
        const document = await this.collection.findOneAndUpdate({'_id': id}, object)
        if (!document) {
            const error = new Error('Error al actualizar el documento');
            throw error;
        }
        return document;
    }

    //DELETE
    async deleteById(id){
        await this.collection.findByIdAndDelete({'_id': id});
        return `Se eliminó el documento ${id} OK`;
    }
}

export default ContainerMongo;
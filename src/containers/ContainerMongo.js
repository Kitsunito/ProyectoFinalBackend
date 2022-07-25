import config from "../../config";
import mongoose from 'mongoose';

class ContainerMongo{
    constructor(collectionName, schema) {
        this.collection = mongoose.model(collectionName, schema)
    }

    async getById(id) {
        const doc = await this.collection.find({'_id': id}, {__V: 0});
        if (!doc) {
            const error = new Error('El producto no existe');
            error.statusCode = 404;
            throw error;
        }

        return doc;
    }
}

export default ContainerMongo;
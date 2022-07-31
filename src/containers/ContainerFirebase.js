import config from '../../config.js';
import admin from 'firebase-admin';
import { initializeApp, getApps } from 'firebase-admin/app';

if (!getApps().length){
    initializeApp({credential: admin.credential.cert(config.firebase)});
    admin.firestore().settings({ignoreUndefinedProperties:true});
}

const db = admin.firestore();

class ContainerFirebase {
    constructor(collectionName){
        this.collection = db.collection(collectionName)
    }

    //GET de un documento
    async getById(id) {
        const document  = await this.collection.doc(id).get();

        if (!document) {
            const error = new Error('El documento no existe');
            error.statusCode = 404;
            throw error;
        }       
        const response = {
            _id: document.id,
            ...document.data()
        }
        return response;
    }

    //GET de todos los documentos
    async getAll(){
        const querySnapshots = await this.collection.get();
        if (!querySnapshots) {
            const error = new Error('Error al obtener la colección');
            error.statusCode=404;
            throw error;
        }
        const documents = querySnapshots.docs;

        
        const response = documents.map(document => ({
            _id: document.id,
            ...document.data()
        }))
        return response;
    }

    //POST
    async save(object) {
        const document =  await this.collection.add(object);
        if (!document) {
            const error = new Error('Error al guardar el documento');
            throw error;
        }
        return await this.getById(document._path.segments[1]);
    }

    //PUT
    async updateById(id, object){
        const document = await this.collection.doc(id).update(object);
        if (!document) {
            const error = new Error('Error al actualizar el documento');
            throw error;
        }
        return document;
    }


    //DELETE
    async deleteById(id){
        await this.collection.doc(id).delete({exists: true});
        return `Se eliminó el documento ${id} OK`;
    }
}

export default ContainerFirebase;
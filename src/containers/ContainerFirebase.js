import config from '../../config';
import admin from 'firebase-admin';

admin.initializeApp({
    credential: admin.credential.cert(config.firebase)
});
const db = admin.firestore();


class ContainerFirebase {
    constructor(collectionName){
        this.collection = db.collection(collectionName)
    }

    //GET de un documento

    //GET de todos los documentos

    //POST
    async save(object) {
        const document =  await this.collection.add(object);
        if (!document) {
            const error = new Error('Error al guardar el documento');
            throw error;
        }
        return document;
}

    //PUT

    //DELETE

}

export default ContainerFirebase;
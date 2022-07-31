import 'dotenv/config';

export default {
    mongodb: {
        connectionString: `mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPASS}@cluster0.fxhyh.mongodb.net/?retryWrites=true&w=majority`
    },
    firebase: {
        "type": "service_account",
        "project_id": "proyectofinalback",
        "private_key_id": process.env.FIREBASE_KEY_ID,
        "private_key": process.env.FIREBASE_KEY,
        "client_email": "firebase-adminsdk-s1jnd@proyectofinalback.iam.gserviceaccount.com",
        "client_id": "111939018413396407391",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-s1jnd%40proyectofinalback.iam.gserviceaccount.com"
    }
}
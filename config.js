import 'dotenv/config';
//const {firebaseKey} = JSON.parse(process.env.FIREBASE_PRIVATE_KEY);

export default {
    mongodb: {
        connectionString: `mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPASS}@cluster0.fxhyh.mongodb.net/?retryWrites=true&w=majority`
    },
    firebase: {
        "type": "service_account",
        "project_id": "proyectofinalback",
        "private_key_id": "173505c5ae6a58b073b9a440d83be99b386cf694",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDTQr7KxvmXyaaF\nkArKqwZIw+We8OZWi6khD7Vkwe3SCSFsTLrc9fmA1Znxj+nlEmwy8qMyJYs+38xC\nsVGedhooFXQZnCmWxf1w17FjtHJtfjGr4YDQJ4vjRrkfADtaWnXoxPoZmJi3lAe3\nNp1W/1PRxd3aMlZ5aHIgQYlspbrOHElKIlgYYzUOGvssDqN4cSixC/DCG+RKVTOw\ntkfCNE1njC0eSdL8g8OADODafKy917635OP8sRvSEuqY5ZcDTBbrDTUi8x0kkwK1\n7AN5Q2Ze9HOjvQRKFbAes8Y3KQHllfaKG5DGpeX95+tgM6polcexcURNnrprqW1G\nHqBQlEJJAgMBAAECggEABXXuNJOcE/5UXZNxk/eDvBHEN62GZqpJft9HEwmoOgue\nX4xEMD3zaw8aYZIUu6UUQuTerwclaESkpPysXWo0FuEnFRpiQNFxUZ9hqHAbnRTr\n98Nmbvr2tLM5ScHZxuYbsh6VUGAPYn9jC6tPudXztrJkn6U5cv3uJUNMaBCImZc5\niv6Mhov1mZ6lvmew5y5wi/rZTYGdBMgYUBXAjBol/3F/RWUfOhY7pA95LvYDe5A+\nad+ErSFyvwxkBMm6ha4KuP6GB7AbHRV//PDhoagHDLNRCHBdcRhHXaarGD/jwmcK\nu7KeqnBVlFZdkX+9Bd18zW8g+Cfyxc/BM/kIdnNQWQKBgQD2ND+cdf+Pe47f135v\nY2hG7ysGwYbwXreYq3qxVcFKDlReKdifv9lx+AZBunfJLMVNsa0QFP9YGHOs62E2\nVFAtBINep4erwvaAATacwHj7noHrRDuwyzPgfaMkC+iz422wK3b/R2UXDdBg+XwG\nLki3TnNdmwzfDWX8IkAGDwvzDwKBgQDbqpNQxuMr1QDea56DcLa2eSEZGTozVO4j\nm3AVFecPMptw0ogTnvnZfxepVfCSU8IMXBDBXsJoEgHpxz73SkB2SXxiY4Wd7vft\noiPvjoc2Wok9wYXguY86okTPEIFJIN1y/WsWUvl55/CQxNHbmSDV6hrbBKQnRH45\n3uwjQA4VJwKBgQC7+KAoYJ7BeWBX3jsV6BuRLMD444CWvHoIAcQm6IYueEpJqkFN\nljf6H5cHT8psudXZv7GV+bIKHIEUoJET3cNo221BMz8OEEgK6uI7Q2gbE6W1bd70\n1++/kaygtMbxsM3qFwU/Wc8AjvdtUo0yWtwBt8+0w9BL6/rVSYEAHzTMWQKBgQDB\na/pZlzczQlSIhQTHwjjwhcoyGneX+YHTUqwntOiHBk2+03LErChebj18etLhVeU5\nEtwiGPlfv/N1UV9NSlFmlqBy1iUygthGo423A65lmuTbvwrObTYEMBwco/DjXpAA\nD8r6lkdcI3I9V0FedwBlu8S38+dDOFlZRcRx6ZY84wKBgQDJNXb49UambYdN87K3\nP5+yZjrNZ7pxt/3p9IDfmAfFVdPW/CRlxgsseH0chR/CvoQOpQ/KD94MB2Cv+ZKh\nJV24ca5qmqf2PKciBTMDIMC4pFslc+KaCtIUrlKPmb/DtFcNiNb0PENdSgECtaPc\nZn2ayWweoJkcBBRfmUarwNFKhg==\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-s1jnd@proyectofinalback.iam.gserviceaccount.com",
        "client_id": "111939018413396407391",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-s1jnd%40proyectofinalback.iam.gserviceaccount.com"
    }
}
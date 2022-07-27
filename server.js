import 'dotenv/config';
import express from 'express';
const app = express();
import routes from './src/routes/index.js'
const PORT = process.env.PORT || 8080;


//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes);
app.use('/*', (req, res) => {
    res.status(404).json({ Error: `La ruta ${req.originalUrl} no está definida para el método ${req.method}.`});
}); 

//Corremos el server escuchando el puerto indicado
app.listen(PORT, (error) => {
    if (error)
        console.log(`Se produjo un error: ${error}`);
    else
        console.log(`Servidor escuchando el puerto ${PORT}`);
})



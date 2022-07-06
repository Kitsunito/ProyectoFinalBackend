const express = require('express');
const app = express();
const routes = require('./src/routes');
const port = 8080;


//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes);

//Corremos el server escuchando el puerto indicado
app.listen(port, (error) => {
    if (error)
        console.log(`Se produjo un error: ${error}`);
    else
        console.log(`Servidor escuchando el puerto ${port}`);
})



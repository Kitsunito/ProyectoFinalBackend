const ApiProducts = require('../Api');
const products = new ApiProducts("productos.txt");

const getProduct = (req, res) => {
    try {
        const id = Number(req.params.id);
        products.getById(id)
            .then( result => {
                if (!result){
                    res.sendStatus(404);
                } else {
                    res.json(result)
                }});
    } catch (error) {
        console.log(`Error: ${error}`);
        res.sendStatus(500);
    }
}

const getProducts = (req, res) => {
    try {
        products.getAll().then(result => res.json(result));
    } catch (error) {
        console.log(`Error: ${error}`);
        res.sendStatus(500);
    }
}

const addProduct = (req, res) => {
    try {
        const { nombre, apellido, edad } = req.body;
        products.save({ nombre, apellido, edad })
        res.sendStatus(201)
    } catch (error) {
        console.log(`Error: ${error}`);
        res.sendStatus(500);
    }
}

const updateProduct = (req, res) => {
    try {
        const {id, nombre, apellido, edad } = req.body;
        console.log(nombre);
        products.updateProduct(Number(id), {nombre, apellido, edad});
        res.sendStatus(200);
    } catch (error) {
        console.log(`Error: ${error}`);
        res.sendStatus(error.statusCode);
    }
}

module.exports = {getProduct, getProducts, addProduct, updateProduct};
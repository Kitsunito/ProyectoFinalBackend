const ApiProducts = require('../Api');
const products = new ApiProducts("productos.txt");

//Get para un elemento
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

//Get para todos los elementos
const getProducts = (req, res) => {
    try {
        products.getAll().then(result => res.json(result));
    } catch (error) {
        console.log(`Error: ${error}`);
        res.sendStatus(500);
    }
}

//Post
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

//Put
const updateProduct = (req, res) => {
    try {
        const id = Number(req.params.id); 
        const {nombre, apellido, edad } = req.body;
        products.updateProduct(id, {nombre, apellido, edad});
        res.sendStatus(200);
    } catch (error) {
        res
            .status(error.statusCode ? error.statusCode : 500)
            .json({ error: error.message });
    }
}

//Delete
const deleteProduct = (req, res) => {
    try {
        const id = Number(req.params.id);
    } catch (error) {
        console.log(`Error: ${error}`);
        res.sendStatus(error.statusCode);
    }
}

module.exports = {getProduct, getProducts, addProduct, updateProduct, deleteProduct};
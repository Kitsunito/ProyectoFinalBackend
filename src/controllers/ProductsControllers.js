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

// const updateProduct = (req, res) => {
//     try {
//         const id = Number(req.params.id); 
//         const {nombre, apellido, edad } = req.body;
//         console.log("Posición 1");
//         products.updateProduct(id, {nombre, apellido, edad});
//         console.log("Posición 2");
//         res.sendStatus(200);
//     } catch (error) {
//         // res
//         //     .status(error.statusCode ? error.statusCode : 500)
//         //     .json({ error: error.message });
//         console.log("Posicion 3")
//     }
// }

const updateProduct = (req, res) => {
    try {
        const id = Number(req.params.id);
        const { name, price, thumbnail } = req.body;
        products.updateProduct(id, {name, price, thumbnail});
        res.sendStatus(200);
    } catch (error) {
        res
            .status(error.statusCode ? error.statusCode : 500)
            .json({ error: error.message });
    }
}

const deleteProduct = (req, res) => {
    try {
        const id = Number(req.params.id);
    } catch (error) {
        console.log(`Error: ${error}`);
        res.sendStatus(error.statusCode);
    }
}

module.exports = {getProduct, getProducts, addProduct, updateProduct, deleteProduct};
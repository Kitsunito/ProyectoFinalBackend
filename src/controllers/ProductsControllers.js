//const ApiProducts = require('../Api');
// const products = new ApiProducts("productos.txt");
// const Product = require('../clases/Product');
import { ProductDao } from "../containers/daos/index.js";

//GET de un producto
const getProduct = (req, res) => {
    try {
        ProductDao.getById(req.params.id)
            .then( result => {
                if (!result){
                    res.sendStatus(404);
                } else {
                    res.status(200).json(result);
                }});
    } catch (error) {
        console.warn(`Error: ${error}`);
        res.sendStatus(error.statusCode ? error.statusCode : 500);
    }
}

//GET de todos los productos
const getProducts = (req, res) => {
    try {
        ProductDao.getAll().then(result => {res.status(200).json(result);});
    } catch (error) {
        console.warn(`Error: ${error}`);
        res.sendStatus(error.statusCode ? error.statusCode : 500);
    }
}

//POST de un producto
const addProduct = (req, res) => {
    try {
        //Insanciamos un Producto con un id ficticio
        const newProduct = new Product(-1, new Date, req.body.nombre, req.body.descripcion, req.body.codigo, req.body.foto, req.body.precio, req.body.stock);
        //Validamos que sea un objeto producto y, en ese caso, guardamos el producto
        if (newProduct.validateData()) {
            products.save(newProduct).then(result => {
                res.status(201).json(result);
            });
        } else {
            const error = new Error(`Faltan datos de producto`)
            error.statusCode = 400;
            throw error;
        }
    } catch (error) {
        console.log(`Error: ${error}`);
        res
            .status(error.statusCode ? error.statusCode : 500)
            .json({Error: error.message});
    }
}

// //PUT de un producto
// const updateProduct = (req, res) => {
//     try {
//         const id = Number(req.params.id);
//         const {nombre, descripcion, codigo, foto, precio, stock} = req.body;
//         products.updateById(id, {nombre, descripcion, codigo, foto, precio, stock});
//         res.sendStatus(200);
//     } catch (error) {
//         res
//             .status(error.statusCode ? error.statusCode : 500)
//             .json({ error: error.message });
//     }
// }

// //DELETE de un producto
// const deleteProduct = (req, res) => {
//     try {
//         const id = Number(req.params.id);
//         products.deleteById(id);
//         res.sendStatus(204);
//     } catch (error) {
//         console.log(`Error: ${error}`);
//         res.sendStatus(error.statusCode);
//     }
// }

/*, getProducts, addProduct, updateProduct, deleteProduct*/

export {getProduct, getProducts, addProduct};
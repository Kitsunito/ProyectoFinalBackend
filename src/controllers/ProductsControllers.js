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
                }})
            .catch(error => {
                console.warn(`${error}`);
                res.sendStatus(error.statusCode ? error.statusCode : 500)});
            } catch (error) {
                console.log(`Error: ${error}`);
                res
                    .status(error.statusCode ? error.statusCode : 500)
                    .json({Error: error.message});
            }
}

//GET de todos los productos
const getProducts = (req, res) => {
    ProductDao.getAll().then(result => {res.status(200).json(result);})
        .catch(error => {
            console.warn(`${error}`);
            res.sendStatus(error.statusCode ? error.statusCode : 500);
        })
}

//POST de un producto
const addProduct = (req, res) => {
    try {
        const {name, description, code, thumbnail, price, stock} = req.body;
        ProductDao.save({name, description, code, thumbnail, price, stock})
            .then(result => {res.status(200).json(result)})
            .catch(error => {
                console.log(`Error: ${error}`);
                res
                    .status(error.statusCode ? error.statusCode : 500)
                    .json({Error: error.message});
            });
    } catch (error) {
        console.log(`Error: ${error}`);
        res
            .status(error.statusCode ? error.statusCode : 500)
            .json({Error: error.message});
    }
}

//PUT de un producto
const updateProduct = (req, res) => {
    try {
        const {name, description, code, thumbnail, price, stock} = req.body;
        ProductDao.updateById(req.params.id, {name, description, code, thumbnail, price, stock})
            .then(result => {res.status(200).json(`Producto ${result.id} actualizado OK.`)})
            .catch(error => {
                console.log(`Error: ${error}`);
                res
                    .status(error.statusCode ? error.statusCode : 500)
                    .json({Error: error.message})
            });
    } catch (error) {
        res
            .status(error.statusCode ? error.statusCode : 500)
            .json({ error: error.message });
    }
}

//DELETE de un producto
const deleteProduct = (req, res) => {
    try {
        ProductDao.deleteById(req.params.id)
            .then(result => res.status(204).json(result))
            .catch(error => {
                res
                    .status(500)
                    .json({Error: error.message});
            });
    } catch (error) {
        console.log(`Error: ${error}`);
        res.sendStatus(error.statusCode);
    }
}

export {getProduct, getProducts, addProduct, updateProduct, deleteProduct};
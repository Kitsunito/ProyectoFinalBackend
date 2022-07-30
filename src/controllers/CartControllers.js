import { ProductDao, CartDao } from "../containers/daos/index.js";
import { mongoose } from "mongoose";

//POST: '/' - Crea un carrito y devuelve su id.
const newCart = (req, res) => {
    try {
        const products = [];
        CartDao.save({timestamp: new Date, products})
            .then(result => {
                if (!result)
                    res.sendStatus(404);
                else
                    res.status(201).json(result)})
            .catch(error => {
                res
                    .status(500)
                    .json({Error: error.message});
            });
    } catch (error) {
        console.log(`${error}`);
        res
            .status(res.statusCode ? res.statusCode : 500)
            .json({error});
    }
}

//DELETE: '/:id' - Vacía un carrito y lo elimina.
const deleteCart = (req, res) => {
    try {
        CartDao.deleteById(req.params.id)
            .then(res.sendStatus(204))
            .catch(error => {
                res
                    .status(500)
                    .json({Error: error.message});
            });
    } catch (error) {
        console.log(`${error}`);
        res.sendStatus(error.statusCode);
    }
}

//GET: '/:id/productos' - Me permite listar todos los productos guardados en el carrito
const showProducts = (req, res) => {
    try {
        CartDao.getById(req.params.id)
            .then( result => {
                if (!result || !result.products)
                    res.sendStatus(404);
                res.status(200).json(result.products);
                })
            .catch(error => {
                res
                    .status(500)
                    .json({Error: error.message});
            });
    } catch (error) {
        console.log(`Error: ${error}`);
        res.sendStatus(500);
    }
}

// POST: '/:id/productos/:id_prod' - Para incorporar productos al carrito por su id de producto
const  addProductToCart = (req, res) => {
    try {
        const id = req.params.id;
        const id_prod = req.params.id_prod;

        //Buscamos el carrito
        CartDao.getById(id)
            .then( result => {
                //Buscamos el producto
                if (result) {
                    ProductDao.getById(id_prod)
                        .then(product => {
                            console.log(result);
                            console.log(product);
                            //Si lo encontramos guardamos el producto en la variable
                            if (product) {
                                result.products.push(product);
                                const updatedCart = {
                                    timestamp: result.timestamp,
                                    products: result.products
                                }
                                CartDao.updateById(result.id, updatedCart)
                                    .then(res.sendStatus(201));
                            } else
                            //Si no, devolvemos el status 404;
                                res.sendStatus(404);
                        })
                        .catch();
                } else {
                    res.sendStatus(404);
                }
                })
            .catch(error => {
                res
                    .status(500)
                    .json({Error: error.message});
            });
    } catch (error) {
        console.log(`Error: ${error}`);
        res.sendStatus(500);
    }
}
// DELETE: '/:id/productos/:id_prod' - Eliminar un producto del carrito por su id de carrito y de producto
const deleteProductFromCart = (req, res) => {
    try {
        const id = req.params.id;
        const id_prod = req.params.id_prod;

        //Buscamos el carrito
        CartDao.getById(id)
            .then(result => {
                //Si no lo encuentra o no tiene productos, devolvemos el error 404
                if (!result)
                    res.sendStatus(404);
                else {
                    //Si lo encuentra, buscamos el index del mismo
                    const products = result.products;
                    const index = products.findIndex(product => product._id == id_prod);
                    // Si encuentra un ínidce, lo eliminamos del array y actualizamos el carrito sin el producto
                    if (index !== -1) {
                        result.products.splice(index,1);
                        CartDao.updateById(result.id, {products: result.products})
                            .then(res.sendStatus(204));
                    //En caso contrario, devolvemos el status 404
                    } else
                        res.sendStatus(404);
                }
            })
            .catch(error => {
                res
                    .status(500)
                    .json({Error: error.message});
            });
    } catch (error) {
        console.log(`Error: ${error}`);
        res.sendStatus(500);        
    }
}

export {newCart, deleteCart, showProducts, addProductToCart, deleteProductFromCart}
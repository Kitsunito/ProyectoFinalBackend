import {json} from 'express';
const ApiProducts = require('../Api');
const carts = new ApiProducts("carritos.txt");
const products = new ApiProducts("productos.txt");
const Cart = require('../clases/Cart')
const Product = require('../clases/Product');

//POST: '/' - Crea un carrito y devuelve su id.
const newCart = (req, res) => {
    try {
        const newCart = new Cart({id: -1, products: []});
        carts.save({timestamp: newCart.timestamp, products: newCart.products})
            .then(result => {
                if (!result)
                    res.sendStatus(404);
                else
                    res.status(201).json(result);
            });
    } catch (error) {
        console.log(`Error: ${error}`);
        res.sendStatus(500);
    }
}

//DELETE: '/:id' - Vacía un carrito y lo elimina.
const emptyCart = (req, res) => {
    try {
        const id = Number(req.params.id);
        carts.deleteById(id)
            .then(res.sendStatus(204));
    } catch (error) {
        console.log(`Error: ${error}`);
        res.sendStatus(error.statusCode);
    }
}

//GET: '/:id/productos' - Me permite listar todos los productos guardados en el carrito
const showProducts = (req, res) => {
    try {
        const id = Number(req.params.id);
        carts.getById(id)
            .then( result => {
                if (!result || !result.products)
                    res.sendStatus(404);
                else {
                    const products = [];
                    result.products.map(product => {
                        if (product) {
                            const prod = new Product(product.id, product.timestamp, product.nombre, product.descripcion,
                                product.codigo, product.foto, product.precio, product.stock);
                            products.push(prod);
                        }
                    })
                    res.status(200).json(products);
                }
            });
    } catch (error) {
        console.log(`Error: ${error}`);
        res.sendStatus(500);
    }
}

// POST: '/:id/productos' - Para incorporar productos al carrito por su id de producto
const  addProductToCart = (req, res) => {
    try {
        const id = Number(req.params.id);
        const id_prod = Number(req.params.id_prod);

        //Buscamos el carrito
        carts.getById(id)
            .then( result => {
                //Buscamos el producto
                if (result) {
                    products.getById(id_prod)
                        .then(product => {
                            console.log(result);
                            console.log(product);
                            //Si lo encontramos guardamos el producto en la variable
                            if (product) {
                                const prod = new Product(product.id, product.timestamp, product.nombre, product.descripcion,
                                    product.codigo, product.foto, product.precio, product.stock);
                                result.products.push(prod);
                                const updatedCart = {
                                    timestamp: result.timestamp,
                                    products: result.products
                                }
                                carts.updateById(result.id, updatedCart)
                                    .then(res.sendStatus(201));
                            } else
                            //Si no, devolvemos el status 404;
                                res.sendStatus(404);
                        });
                } else {
                    res.sendStatus(404);
                }
                });
    } catch (error) {
        console.log(`Error: ${error}`);
        res.sendStatus(500);
    }
}
// DELETE: '/:id/productos/:id_prod' - Eliminar un producto del carrito por su id de carrito y de producto
const deleteProductFromCart = (req, res) => {
    try {
        const id = Number(req.params.id);
        const id_prod = Number(req.params.id_prod);
        
        //Buscamos el carrito
        carts.getById(id)
            .then(result => {
                //Si no lo encuentra o no tiene productos, devolvemos el error 404
                if (!result)
                    res.sendStatus(404);
                else {
                    //Si lo encuentra, buscamos el index del mismo
                    const index = result.products.findIndex(product => product.id === id_prod);
                    //Si encuentra un ínidce, lo eliminamos del array y actualizamos el carrito sin el producto
                    if (index !== -1) {
                        result.products.splice(index,1);
                        carts.updateById(result.id, {products: result.products})
                            .then(res.sendStatus(204));
                    //En caso contrario, devolvemos el status 404
                    } else
                        res.sendStatus(404);
                }
            });
    } catch (error) {
        console.log(`Error: ${error}`);
        res.sendStatus(500);        
    }
}

module.exports = {newCart, emptyCart, showProducts, addProductToCart, deleteProductFromCart}
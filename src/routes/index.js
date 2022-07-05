const { Router } = require('express');
const router = Router();
const products = require('./products');
const cart = require('./cart');

//Derivamos todas las rutas dede la raíz productos al archivo products;
router.use('/productos', products);

//Derivamos todas las rutas desde la raíz carrito al archivo cart;
router.use('/carrito', cart)


module.exports = router;
import { Router } from 'express';
import products from './products.js';
const router = Router();

const cart = require('./cart');

//Derivamos todas las rutas dede la raíz productos al archivo products;
router.use('/productos', products);

//Derivamos todas las rutas desde la raíz carrito al archivo cart;
router.use('/carrito', cart)


export default router;
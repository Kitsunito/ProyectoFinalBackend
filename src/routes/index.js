import { Router } from 'express';
import products from './products.js';
import cart from './cart.js'
const router = Router();

//Derivamos todas las rutas dede la raíz productos al archivo products;
router.use('/productos', products);

//Derivamos todas las rutas desde la raíz carrito al archivo cart;
router.use('/carrito', cart)


export default router;
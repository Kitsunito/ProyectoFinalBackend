const { Router } = require('express');
const router = Router();
const {getProduct, getProducts, addProduct, updateProduct, deleteProduct} = require('../controllers/ProductsControllers');
const checkAdmin = require('../controllers/checkAdmin');


/*----------Rutas----------*/
// GET: '/:id?' - Me permite listar todos los productos disponibles ó un producto por su id (disponible para usuarios y administradores)
router.get('/:id', getProduct);
router.get('/', getProducts);

// POST: '/' - Para incorporar productos al listado (disponible para administradores)
router.post('/', checkAdmin, addProduct);

// PUT: '/:id' - Actualiza un producto por su id (disponible para administradores)
router.put('/:id', checkAdmin, updateProduct);

// DELETE: '/:id' - Borra un producto por su id (disponible para administradores)
router.delete('/:id', checkAdmin, deleteProduct);

module.exports = router;
const { Router } = require('express');
const router = Router();
const {newCart, emptyCart, showProducts, addProductToCart, deleteProductFromCart} = require('../controllers/CartControllers');



/*----------Rutas----------*/
// POST: '/' - Crea un carrito y devuelve su id.
router.post('/', newCart);

// DELETE: '/:id' - Vacía un carrito y lo elimina.
router.delete('/:id', emptyCart);

// GET: '/:id/productos' - Me permite listar todos los productos guardados en el carrito
router.get('/:id/productos', showProducts)

// POST: '/:id/productos' - Para incorporar productos al carrito por su id de producto
router.post('/:id/productos/:id_prod', addProductToCart)

// DELETE: '/:id/productos/:id_prod' - Eliminar un producto del carrito por su id de carrito y de producto
router.delete('/:id/productos/:id_prod', deleteProductFromCart);

module.exports = router;
import {Router} from 'express'
import {newCart, deleteCart, showProducts, addProductToCart, deleteProductFromCart} from '../controllers/CartControllers.js';
const router = Router();


// /*----------Rutas----------*/
// POST: '/' - Crea un carrito y devuelve su id.
router.post('/', newCart);

// DELETE: '/:id' - Vacía un carrito y lo elimina.
router.delete('/:id', deleteCart);

// GET: '/:id/productos' - Me permite listar todos los productos guardados en el carrito
router.get('/:id/productos', showProducts)

// POST: '/:id/productos' - Para incorporar productos al carrito por su id de producto
router.post('/:id/productos/:id_prod', addProductToCart)

// DELETE: '/:id/productos/:id_prod' - Eliminar un producto del carrito por su id de carrito y de producto
router.delete('/:id/productos/:id_prod', deleteProductFromCart);

export default router
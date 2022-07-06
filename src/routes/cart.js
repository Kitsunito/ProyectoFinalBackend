const { Router } = require('express');
const router = Router();
const {newCart, emptyCart, showProducts, addProductToCart, deleteProductFromCart} = require('../controllers/CartControllers');

//POST
router.post('/', newCart);

router.delete('/:id', emptyCart);

router.get('/:id/productos', showProducts)

router.post('/:id/productos/:id_prod', addProductToCart)

router.delete('/:id/productos/:id_prod', deleteProductFromCart);

module.exports = router;
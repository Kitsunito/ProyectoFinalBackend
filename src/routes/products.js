const { Router } = require('express');
const router = Router();
const {getProduct, getProducts, addProduct, updateProduct} = require('../controllers/ProductsControllers');

router.get('/:id', getProduct);

router.get('/', getProducts);

router.post('/', addProduct);

router.put('/', updateProduct)

module.exports = router;
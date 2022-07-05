const { Router } = require('express');
const router = Router();
const {getProduct, getProducts, addProduct, updateProduct, deleteProduct} = require('../controllers/ProductsControllers');

router.get('/:id', getProduct);

router.get('/', getProducts);

router.post('/', addProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

module.exports = router;
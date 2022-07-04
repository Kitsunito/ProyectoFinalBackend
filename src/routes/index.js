const { Router } = require('express');
const router = Router();
const products = require('./products');

//Derivamos todas las rutas dede la raíz productos al archivo products;
router.use('/productos', products);



module.exports = router;
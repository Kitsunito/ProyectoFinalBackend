const { Router } = require('express');
const router = Router();
const {newCart} = require('../controllers/CartControllers');

//POST
router.post('/', newCart);

module.exports = router;
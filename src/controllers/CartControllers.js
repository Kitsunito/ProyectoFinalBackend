const ApiProducts = require('../Api');
const carts = new ApiProducts("carritos.txt");

//POST: '/' - Crea un carrito y devuelve su id.
const newCart = (req, res) => {
    try {
        const {producto} = req.body;
        carts.save({producto})
            .then(result => {
                res.json(result);
            });
    } catch (error) {
        console.log(`Error: ${error}`);
        res.sendStatus(500);
    }
}

//DELETE: '/:id' - Vacía un carrito y lo elimina.
const emptyCart = (req, res) => {
    try {
        const id = Number(req.params.id);
        carts.deleteById(id)
            .then(res.sendStatus(204));
    } catch (error) {
        console.log(`Error: ${error}`);
        res.sendStatus(error.statusCode);
    }
}

//GET: '/:id/productos' - Me permite listar todos los productos guardados en el carrito
const showProducts = (req, res) => {
    try {
        const id = Number(req.params.id);
        carts.getById(id)
            .then( result => {
                if (!result.products)
                    res.sendStatus(404);
                else
                    res.json(result.products)
            });
    } catch (error) {
        console.log(`Error: ${error}`);
        res.sendStatus(500);
    }
}

// POST: '/:id/productos' - Para incorporar productos al carrito por su id de producto
const addProductToCart = (req, res) => {
    try {
        const id = Number(req.params.id);
        carts.getById(id)
    } catch (error) {

    }
}
// DELETE: '/:id/productos/:id_prod' - Eliminar un producto del carrito por su id de carrito y de producto


module.exports = {newCart, emptyCart, showProducts}
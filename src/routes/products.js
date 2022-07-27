import { Router } from 'express';
import {ProductDao} from '../containers/daos/index.js'
import checkAdmin from '../controllers/checkAdmin.js';

const router = Router();
/*----------Rutas----------*/
// GET: '/:id?' - Me permite listar todos los productos disponibles ó un producto por su id (disponible para usuarios y administradores)
router.get('/:id', ProductDao);
// router.get('/', getProducts);

// // POST: '/' - Para incorporar productos al listado (disponible para administradores)
// router.post('/', checkAdmin, addProduct);

// // PUT: '/:id' - Actualiza un producto por su id (disponible para administradores)
// router.put('/:id', checkAdmin, updateProduct);

// // DELETE: '/:id' - Borra un producto por su id (disponible para administradores)
// router.delete('/:id', checkAdmin, deleteProduct);

export default router;
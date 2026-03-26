const express = require('express');
const router = express.Router();

const {
    obtenerProductos,
    crearProducto,
    actualizarProducto,
    eliminarProducto
} = require('../controllers/inventarioController');

const verificarToken = require('../middlewares/authMiddleware');

// 🔓 PÚBLICO
router.get('/productos', obtenerProductos);

// 🔒 PRIVADO (requiere login)
router.post('/productos', verificarToken, crearProducto);
router.put('/productos/:id', verificarToken, actualizarProducto);
router.delete('/productos/:id', verificarToken, eliminarProducto);

module.exports = router;
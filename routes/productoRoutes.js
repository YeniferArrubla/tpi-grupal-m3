const express = require('express');
const router = express.Router();
const Producto = require('../models/Producto'); // Traemos el modelo que creamos recién

// POST: Ruta para crear un nuevo producto (http://localhost:5000/api/productos)
router.post('/', async (req, res) => {
    try {
        // req.body contiene los datos que mandamos desde Postman
        const nuevoProducto = new Producto(req.body);
        
        // Guardamos el producto en la base de datos de MongoDB
        await nuevoProducto.save();
        
        // Respondemos que todo salió genial
        res.status(201).json({
            ok: true,
            mensaje: '¡Producto creado con éxito!',
            producto: nuevoProducto
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            error: 'Hubo un error al guardar el producto',
            detalle: error.message
        });
    }
});

module.exports = router;
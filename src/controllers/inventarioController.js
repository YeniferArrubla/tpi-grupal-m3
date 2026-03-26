const inventario = require('../models/inventario.js');

// 🔹 Obtener todos los productos
// const obtenerProductos = (req, res, next) => {
//     try {
//         const productos = inventario.obtenerTodosProductos();
//         res.json(productos);
//     } catch (error) {
//         next(error);
//     }
// };

const obtenerProductos = (req, res, next) => {
    try {
        const { nombre } = req.query;

        const productos = inventario.obtenerTodosProductos(nombre);

        res.json(productos);
    } catch (error) {
        next(error);
    }
};

// 🔹 Crear producto
const crearProducto = (req, res, next) => {
    try {
        const { nombre, stock, precio } = req.body;

        if (!nombre || stock === undefined || stock === '' || precio === undefined || precio === '') {
            const error = new Error('Faltan campos requeridos');
            error.status = 400;
            throw error;
        }

        const nuevoProducto = inventario.crearProducto(nombre, stock, precio);
        res.status(201).json(nuevoProducto);

    } catch (error) {
        next(error);
    }
};

// 🔹 Actualizar producto
const actualizarProducto = (req, res, next) => {
    try {
        const { id } = req.params;
        const { nombre, stock, precio } = req.body;

        if (!nombre || stock === undefined || stock === '' || precio === undefined || precio === '') {
            const error = new Error('Faltan campos requeridos');
            error.status = 400;
            throw error;
        }

        const producto = inventario.actualizarProducto(parseInt(id), nombre, stock, precio);

        if (!producto) {
            const error = new Error('Producto no encontrado');
            error.status = 404;
            throw error;
        }

        res.json(producto);

    } catch (error) {
        next(error);
    }
};

// 🔹 Eliminar producto
const eliminarProducto = (req, res, next) => {
    try {
        const { id } = req.params;

        const producto = inventario.eliminarProducto(parseInt(id));

        if (!producto) {
            const error = new Error('Producto no encontrado');
            error.status = 404;
            throw error;
        }

        res.json({
            mensaje: 'Producto eliminado correctamente',
            producto
        });

    } catch (error) {
        next(error);
    }
};

module.exports = {
    obtenerProductos,
    crearProducto,
    actualizarProducto,
    eliminarProducto
};


// Primera versión con manejo de errores interno
// const inventario = require('../models/inventario.js');

// const obtenerProductos = (req, res) => {
//     res.json(inventario.obtenerTodosProductos());
// };

// const crearProducto = (req, res) => {
//     const { nombre, stock, precio } = req.body;
    
//     if (!nombre || stock === undefined || stock === '' || precio === undefined || precio === '') {
//         return res.status(400).json({ error: 'Faltan campos requeridos' });
//     }
    
//     const nuevoProducto = inventario.crearProducto(nombre, stock, precio);
//     res.status(201).json(nuevoProducto);
// };

// const actualizarProducto = (req, res) => {
//     const { id } = req.params;
//     const { nombre, stock, precio } = req.body;
    
//     if (!nombre || stock === undefined || stock === '' || precio === undefined || precio === '') {
//         return res.status(400).json({ error: 'Faltan campos requeridos' });
//     }
    
//     const producto = inventario.actualizarProducto(parseInt(id), nombre, stock, precio);
//     if (!producto) {
//         return res.status(404).json({ error: 'Producto no encontrado' });
//     }
    
//     res.json(producto);
// };

// const eliminarProducto = (req, res) => {
//     const { id } = req.params;
    
//     const producto = inventario.eliminarProducto(parseInt(id));
//     if (!producto) {
//         return res.status(404).json({ error: 'Producto no encontrado' });
//     }
    
//     res.json({ mensaje: 'Producto eliminado correctamente', producto });
// };

// module.exports = { obtenerProductos, crearProducto, actualizarProducto, eliminarProducto };
const Producto = require('../models/Producto');

const obtenerProductos = async (req, res, next) => {
    try {
        const { nombre } = req.query;

        let productos;

        if (nombre) {
            productos = await Producto.find({
                nombre: { $regex: nombre, $options: 'i' }
            });
        } else {
            productos = await Producto.find();
        }

        res.json(productos);

    } catch (error) {
        next(error);
    }
};

const crearProducto = async (req, res, next) => {
    try {
        const { nombre, stock, precio } = req.body;

        if (!nombre || stock === undefined || precio === undefined) {
            const error = new Error('Faltan campos requeridos');
            error.status = 400;
            throw error;
        }

        const nuevoProducto = await Producto.create({
            nombre,
            stock,
            precio
        });

        res.status(201).json(nuevoProducto);

    } catch (error) {
        next(error);
    }
};

const actualizarProducto = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { nombre, stock, precio } = req.body;

        if (!nombre || stock === undefined || precio === undefined) {
            const error = new Error('Faltan campos requeridos');
            error.status = 400;
            throw error;
        }

        const producto = await Producto.findByIdAndUpdate(
            id,
            {
                nombre,
                stock,
                precio
            },
            { returnDocument: 'after' }
        );

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

const eliminarProducto = async (req, res, next) => {
    try {
        const { id } = req.params;

        const producto = await Producto.findByIdAndDelete(id);

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

const fs = require('fs');

let productos = JSON.parse(fs.readFileSync('productos.json', 'utf-8'));

const guardarDatos = () => {
    fs.writeFileSync('productos.json', JSON.stringify(productos, null, 2));
};

//let proximoId = 6;

let proximoId = productos.length > 0 
    ? Math.max(...productos.map(p => p.id)) + 1 
    : 1;

module.exports = {
    
    obtenerTodosProductos: (nombre) => {
    if (nombre) {
        return productos.filter(p =>
            p.nombre.toLowerCase().includes(nombre.toLowerCase())
        );
    }
    return productos;
},

    obtenerProductoPorId: (id) => productos.find(p => p.id === id),
    
    crearProducto: (nombre, stock, precio) => {
        const nuevoProducto = {
            id: proximoId++,
            nombre,
            stock: parseInt(stock),
            precio: parseInt(precio)
        };
        productos.push(nuevoProducto);
        guardarDatos();
        return nuevoProducto;
    },
    actualizarProducto: (id, nombre, stock, precio) => {
        const producto = productos.find(p => p.id === id);
        if (producto) {
            producto.nombre = nombre;
            producto.stock = parseInt(stock);
            producto.precio = parseInt(precio);
            guardarDatos();
        }
        return producto;
    },
    eliminarProducto: (id) => {
        const index = productos.findIndex(p => p.id === id);
        if (index !== -1) {
            //return productos.splice(index, 1)[0];
            const eliminado = productos.splice(index, 1)[0];
            guardarDatos();
            return eliminado;
        }
        return null;
    }
};
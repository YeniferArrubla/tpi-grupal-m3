const mongoose = require('mongoose');

// Definimos el esquema de lo que va a tener cada producto
const ProductoSchema = new mongoose.Schema({
    nombre: { 
        type: String, 
        required: [true, 'El nombre es obligatorio'] 
    },
    precio: { 
        type: Number, 
        required: [true, 'El precio es obligatorio'],
        default: 0 
    },
    stock: { 
        type: Number, 
        required: [true, 'El stock es obligatorio'],
        default: 0 
    },
    categoria: { 
        type: String, 
        required: [true, 'La categoría es obligatoria'] 
    }
}, { 
    timestamps: true // Esto crea solo las fechas de cuándo se creó y actualizó el producto
});

// Exportamos el modelo para usarlo en otras partes
module.exports = mongoose.model('Producto', ProductoSchema);
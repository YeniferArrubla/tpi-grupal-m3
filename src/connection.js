const mongoose = require('mongoose');
require('dotenv').config();

const connectionDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('¡Base de datos conectada con éxito!');
    } catch (error) {
        console.error('Error al conectar la base de datos:', error);
    }
};

module.exports = connectionDB;
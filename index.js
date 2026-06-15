require('dotenv').config();
const errorHandler = require('./src/middlewares/errorMiddleware');
const express = require("express");
const app = express();
const connectionDB = require('./src/connection');
connectionDB();

const rateLimit = require('express-rate-limit');

const inventarioRoutes = require("./src/routes/inventarioRoutes.js");
const userRoutes = require('./src/routes/userRoutes');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100, // máximo 100 solicitudes
    message: {
        error: 'Demasiadas solicitudes. Intenta nuevamente más tarde.'
    }
});

app.use(express.json());

app.use(limiter);

app.use(express.static("public"));
app.use("/api", inventarioRoutes);
app.use('/users', userRoutes);
app.use(errorHandler);

//const PORT = 5000;
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Servidor en http://localhost:5000");
});
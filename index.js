require('dotenv').config();
const errorHandler = require('./src/middlewares/errorMiddleware');
const express = require("express");
const app = express();

const inventarioRoutes = require("./src/routes/inventarioRoutes.js");
const userRoutes = require('./src/routes/userRoutes');

app.use(express.json());
app.use(express.static("public"));
app.use("/api", inventarioRoutes);
app.use('/users', userRoutes);
app.use(errorHandler);

//const PORT = 5000;
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Servidor en http://localhost:5000");
});
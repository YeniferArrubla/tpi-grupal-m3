const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

const register = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Faltan datos' });
    }

    const existe = userModel.buscarPorEmail(email);
    if (existe) {
        return res.status(400).json({ error: 'Usuario ya existe' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = userModel.crearUsuario(email, hashedPassword);

    res.status(201).json({ mensaje: 'Usuario creado', user });
};

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = userModel.buscarPorEmail(email);
        if (!user) {
            const error = new Error('Usuario no encontrado');
            error.status = 404;
            throw error;
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            const error = new Error('Contraseña incorrecta');
            error.status = 401;
            throw error;
        }

        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({ mensaje: 'Login exitoso', token });

    } catch (error) {
        next(error);
    }
};

// Primera versión
// const login = async (req, res) => {
//     const { email, password } = req.body;

//     const user = userModel.buscarPorEmail(email);
//     if (!user) {
//         return res.status(404).json({ error: 'Usuario no encontrado' });
//     }

//     const match = await bcrypt.compare(password, user.password);
//     if (!match) {
//         return res.status(401).json({ error: 'Contraseña incorrecta' });
//     }

//     const token = jwt.sign(
//         { id: user.id, email: user.email },
//         //'secreto', // luego lo pasamos a .env
//         process.env.JWT_SECRET,
//         { expiresIn: '1h' }
//     );

//     res.json({ mensaje: 'Login exitoso', token });
// };

module.exports = { register, login };
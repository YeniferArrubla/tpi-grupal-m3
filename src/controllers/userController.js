const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const register = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Faltan datos' });
        }

        const existe = await User.findOne({
            email: email.toLowerCase()
        });

        if (existe) {
            return res.status(400).json({
                error: 'Usuario ya existe'
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            email: email.toLowerCase(),
            password: hashedPassword
        });

        res.status(201).json({
            mensaje: 'Usuario creado'
        });

    } catch (error) {
        next(error);
    }
};

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({
        email: email.toLowerCase()
        });
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
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({ mensaje: 'Login exitoso', token });

    } catch (error) {
        next(error);
    }
};

module.exports = { register, login };
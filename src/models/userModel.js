const fs = require('fs');

let users = JSON.parse(fs.readFileSync('users.json', 'utf-8'));

const guardarUsuarios = () => {
    fs.writeFileSync('users.json', JSON.stringify(users, null, 2));
};

let proximoId = users.length > 0 
    ? Math.max(...users.map(u => u.id)) + 1 
    : 1;

module.exports = {
    crearUsuario: (email, password) => {
        email = email.toLowerCase();

        const nuevoUsuario = {
            id: proximoId++,
            email,
            password
        };
        
        users.push(nuevoUsuario);
        guardarUsuarios();
        return nuevoUsuario;
    },

    buscarPorEmail: (email) => {
        return users.find(u => u.email.toLowerCase() === email.toLowerCase());
    }
};
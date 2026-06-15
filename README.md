# 🛒 Sistema de Inventario con Autenticación JWT

## Descripción del Proyecto

Aplicación web desarrollada con Node.js, Express y MongoDB Atlas para la gestión de inventario de productos.

El sistema permite:

* Registro de usuarios.
* Inicio y cierre de sesión mediante JWT.
* Gestión completa de productos (CRUD).
* Búsqueda de productos por nombre.
* Protección de rutas mediante autenticación.
* Despliegue en la nube utilizando Render.

---

## 🧠 Tecnologías Utilizadas

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JSON Web Token (JWT)
* bcrypt
* express-rate-limit

### Frontend

* HTML5
* CSS3
* JavaScript (Fetch API)

### Despliegue

* Render
* MongoDB Atlas

---

## Funcionalidades

### Usuarios

#### Registro de usuario

Permite crear nuevos usuarios almacenando la contraseña de forma segura mediante hashing con bcrypt.

#### Inicio de sesión

Genera un token JWT para acceder a las funcionalidades protegidas.

#### Cierre de sesión

Elimina el token almacenado en el navegador.

---

### Productos

#### Crear producto

Permite agregar nuevos productos al inventario.

#### Consultar productos

Muestra todos los productos almacenados.

#### Buscar productos

Permite filtrar productos por nombre.

#### Actualizar productos

Permite modificar nombre, stock y precio.

#### Eliminar productos

Permite eliminar productos existentes.

---

## 🛡️Seguridad Implementada

### Hash de contraseñas

Las contraseñas se almacenan utilizando bcrypt.

### Autenticación JWT

Las operaciones de creación, edición y eliminación de productos requieren un token válido.

### Rate Limiting

Se implementó protección contra ataques de fuerza bruta limitando la cantidad de solicitudes realizadas desde una misma IP.

---

## 📁 Estructura del Proyecto

```plaintext
├── models
│   ├── Producto.js
│
├── public
│   └── index.html
│
├── src
│   ├── connection.js
│   │
│   ├── controllers
│   │   ├── inventarioController.js
│   │   └── userController.js
│   │
│   ├── middlewares
│   │   ├── authMiddleware.js
│   │   └── errorMiddleware.js
│   │
│   ├── models
│   │   └── User.js
│   │
│   └── routes
│       ├── inventarioRoutes.js
│       └── userRoutes.js
│
├── .env
├── index.js
├── package.json
└── README.md
```

---

## Instalación

### Clonar repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

### Instalar dependencias

```bash
npm install
```

### Crear archivo .env

```env
PORT=5000
JWT_SECRET=tu_clave_secreta
MONGO_URI=tu_uri_de_mongodb_atlas
```

### Ejecutar proyecto

```bash
npm start
```

Servidor disponible en:

```text
http://localhost:5000
```

---

## Endpoints Disponibles

### Usuarios

#### Registrar usuario

```http
POST /users/register
```

Body:

```json
{
  "email": "usuario@email.com",
  "password": "1234"
}
```

---

#### Iniciar sesión

```http
POST /users/login
```

Body:

```json
{
  "email": "usuario@email.com",
  "password": "1234"
}
```

---

### Productos

#### Obtener todos los productos

```http
GET /api/productos
```

---

#### Buscar productos

```http
GET /api/productos?nombre=arroz
```

---

#### Crear producto

```http
POST /api/productos
```

Headers:

```text
Authorization: Bearer TOKEN
```

Body:

```json
{
  "nombre": "Arroz",
  "stock": 20,
  "precio": 5000
}
```

---

#### Actualizar producto

```http
PUT /api/productos/:id
```

Headers:

```text
Authorization: Bearer TOKEN
```

---

#### Eliminar producto

```http
DELETE /api/productos/:id
```

Headers:

```text
Authorization: Bearer TOKEN
```

---

## Base de Datos

Se utilizó MongoDB Atlas con dos colecciones principales:

### users

```json
{
  "_id": "...",
  "email": "usuario@email.com",
  "password": "hash_bcrypt"
}
```

### productos

```json
{
  "_id": "...",
  "nombre": "Arroz",
  "stock": 20,
  "precio": 5000
}
```

---

## 🌐 Despliegue

Aplicación desplegada en Render:

https://tpi-grupal-m3.onrender.com

---

## 🧪 Pruebas Realizadas

Se verificó correctamente:

* Registro de usuarios.
* Inicio de sesión.
* Generación de JWT.
* Creación de productos.
* Consulta de productos.
* Búsqueda de productos.
* Actualización de productos.
* Eliminación de productos.
* Funcionamiento local.
* Funcionamiento desplegado en Render.
* Persistencia de datos en MongoDB Atlas.

---

## 👩‍💻 Autoras


* Sofia Ruth Fischer
* Jesica Noelia Merep
* Isabel Perez
* Aketzalli Alonso
* Yennifer Arrubla


Proyecto desarrollado como trabajo integrador para el módulo 4 de Desarrollo Backend.

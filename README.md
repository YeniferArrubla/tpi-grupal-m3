# 🛒 API de Gestión de Inventario

Aplicación backend desarrollada con Node.js y Express para la gestión de productos, que incluye autenticación de usuarios mediante JWT y una interfaz web básica.

---

## 🚀 Tecnologías utilizadas

* Node.js
* Express
* JSON como base de datos (persistencia local)
* JWT (JSON Web Token) para autenticación
* bcrypt para hash de contraseñas
* dotenv para variables de entorno

---

## 📁 Estructura del proyecto

```
├── public/                # Frontend (index.html)
├── src/
│   ├── controllers/       # Lógica de negocio
│   ├── models/            # Manejo de datos (JSON)
│   ├── routes/            # Definición de rutas
│   ├── middlewares/       # Autenticación y manejo de errores
├── productos.json         # Base de datos de productos
├── users.json             # Base de datos de usuarios
├── index.js               # Punto de entrada
├── .env                   # Variables de entorno
```

---

## 📦 Instalación

1. Clonar el repositorio:

```bash
git clone <URL_DEL_REPO>
cd nombre-del-proyecto
```

2. Instalar dependencias:

```bash
npm install
```

---

## ⚙️ Variables de entorno

Crear un archivo `.env` en la raíz del proyecto:

```env
PORT=5000
JWT_SECRET=tu_secreto_super_seguro
```

---

## ▶️ Ejecutar el servidor

```bash
node index.js
```

Servidor disponible en:

```
http://localhost:5000
```

---

## 🌐 Uso del frontend

Abrir en el navegador:

```
http://localhost:5000
```

Desde la interfaz puedes:

* Registrarte
* Iniciar sesión
* Agregar productos
* Editar productos
* Eliminar productos
* Buscar productos

---

## 🔐 Autenticación

La API utiliza JWT para proteger rutas sensibles.

### Flujo de uso:

1. Registrar usuario
2. Iniciar sesión
3. Obtener token
4. Enviar token en rutas protegidas

---

## 📌 Endpoints

### 👤 Usuarios

#### 🔹 Registro

```
POST /users/register
```

Body:

```json
{
  "email": "test@test.com",
  "password": "123456"
}
```

---

#### 🔹 Login

```
POST /users/login
```

Respuesta:

```json
{
  "mensaje": "Login exitoso",
  "token": "..."
}
```

---

### 📦 Productos

#### 🔹 Obtener todos los productos

```
GET /api/productos
```

---

#### 🔹 Buscar productos (no sensible a mayúsculas)

```
GET /api/productos?nombre=arroz
```

---

#### 🔹 Crear producto (requiere token)

```
POST /api/productos
```

Headers:

```
Authorization: Bearer TU_TOKEN
```

Body:

```json
{
  "nombre": "Arroz",
  "stock": 10,
  "precio": 2000
}
```

---

#### 🔹 Actualizar producto (requiere token)

```
PUT /api/productos/:id
```

---

#### 🔹 Eliminar producto (requiere token)

```
DELETE /api/productos/:id
```

---

## 🛡️ Seguridad

* Contraseñas encriptadas con bcrypt
* Autenticación mediante JWT
* Middleware para proteger rutas
* Uso de variables de entorno

---

## ⚠️ Manejo de errores

Middleware global para control de errores.

Ejemplo de respuesta:

```json
{
  "error": "Faltan campos requeridos"
}
```

---

## 💾 Persistencia de datos

* Los datos se almacenan en archivos JSON
* Persisten incluso después de reiniciar el servidor

---

## 🧠 Buenas prácticas implementadas

* Arquitectura modular
* Separación de responsabilidades
* Uso de middlewares
* Validaciones básicas
* Manejo de errores centralizado

---

## 🧪 Pruebas

Puedes probar la API con:

* Postman
* O directamente desde el frontend

---

## 👩‍💻 Autoras

Proyecto desarrollado como práctica del módulo 3 - Backend ADA:

* Sofia Ruth Fischer
* Jesica Noelia Merep
* Isabel Perez
* Yennifer Arrubla

---

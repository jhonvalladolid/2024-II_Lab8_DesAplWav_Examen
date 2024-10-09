const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Ruta para obtener todos los usuarios
router.get('/usuarios', usuarioController.getUsuarios);

// Ruta para crear un nuevo usuario (formulario)
router.get('/usuarios/nuevo', usuarioController.showCreateUsuario); // Carga los roles y estados

// Ruta para crear un nuevo usuario (método POST)
router.post('/usuarios', usuarioController.createUsuario);

// Ruta para editar un usuario (formulario)
router.get('/usuarios/:id', usuarioController.showEditUsuario); // Carga los datos del usuario, roles y estados

// Ruta para actualizar un usuario (método PUT)
router.put('/usuarios/:id', usuarioController.updateUsuario);

// Ruta para eliminar un usuario (método DELETE)
router.delete('/usuarios/:id', usuarioController.deleteUsuario);

module.exports = router;

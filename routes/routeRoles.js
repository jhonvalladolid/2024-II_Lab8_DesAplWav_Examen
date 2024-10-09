const express = require('express');
const router = express.Router();
const rolController = require('../controllers/rolController');

// Ruta para obtener todos los roles
router.get('/roles', rolController.getRoles);

// Ruta para crear un nuevo rol (formulario)
router.get('/roles/nuevo', (req, res) => {
  res.render('roles/nuevoRol'); // Renderiza la vista para crear un nuevo rol
});

// Ruta para crear un nuevo rol (método POST)
router.post('/roles', rolController.createRol);

// Ruta para editar un rol (formulario)
router.get('/roles/:id', rolController.getRolById);

// Ruta para actualizar un rol (método PUT)
router.put('/roles/:id', rolController.updateRol);

// Ruta para eliminar un rol (método DELETE)
router.delete('/roles/:id', rolController.deleteRol);

module.exports = router;

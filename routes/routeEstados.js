const express = require('express');
const router = express.Router();
const estadoController = require('../controllers/estadoController');

// Ruta para obtener todos los estados
router.get('/estados', estadoController.getEstados);

// Ruta para crear un nuevo estado (formulario)
router.get('/estados/nuevo', (req, res) => {
  res.render('estados/nuevoEstado'); // Renderiza la vista para crear un nuevo estado
});

// Ruta para crear un nuevo estado (método POST)
router.post('/estados', estadoController.createEstado);

// Ruta para editar un estado (formulario)
router.get('/estados/:id', estadoController.getEstadoById);

// Ruta para actualizar un estado (método PUT)
router.put('/estados/:id', estadoController.updateEstado);

// Ruta para eliminar un estado
router.delete('/estados/:id', estadoController.deleteEstado);

module.exports = router;

const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

// Ruta para mostrar la vista de login
router.get('/login', loginController.showLoginPage);

// Ruta para manejar el proceso de login
router.post('/login', loginController.loginUser);

module.exports = router;

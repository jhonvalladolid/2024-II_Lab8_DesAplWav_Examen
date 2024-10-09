const { Usuario } = require('../models'); // Importa el modelo de usuario

module.exports = {
  // Renderizar la vista de login
  showLoginPage: (req, res) => {
    res.render('loginUser', { title: 'Iniciar Sesión' });
  },

  // Manejar el proceso de inicio de sesión
  loginUser: async (req, res) => {
    const { usuario, contrasenia } = req.body;
  
    if (!usuario || !contrasenia) {
      return res.status(400).send('Faltan datos de inicio de sesión');
    }
  
    try {
      const user = await Usuario.findOne({ where: { usuario } });
  
      if (!user) {
        return res.status(400).send('Usuario no encontrado');
      }
  
      if (user.contrasenia !== contrasenia) {
        return res.status(400).send('Contraseña incorrecta');
      }
  
      res.redirect('/usuarios');
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
      res.status(500).send('Error al iniciar sesión');
    }
  }
};

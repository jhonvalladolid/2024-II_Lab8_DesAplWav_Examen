const { Usuario, Rol, Estado } = require('../models');

module.exports = {
  // Obtener todos los usuarios con sus roles y estados
  getUsuarios: async (req, res) => {
    try {
      const usuarios = await Usuario.findAll({
        include: [
          { model: Rol, as: 'rol' },
          { model: Estado, as: 'estado' }
        ]
      });
      res.render('usuarios/listarUsuario', { usuarios, title: 'Lista de Usuarios' });
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      res.status(500).send('Error al obtener usuarios');
    }
  },

  // Mostrar el formulario para crear un nuevo usuario
  showCreateUsuario: async (req, res) => {
    try {
      const roles = await Rol.findAll();  // Obtener los roles
      const estados = await Estado.findAll();  // Obtener los estados
      res.render('usuarios/nuevoUsuario', { roles, estados, title: 'Crear Nuevo Usuario' });
    } catch (error) {
      console.error('Error al mostrar formulario de creación de usuario:', error);
      res.status(500).send('Error al cargar formulario de creación de usuario');
    }
  },

  // Crear un nuevo usuario
  createUsuario: async (req, res) => {
    try {
      const { usuario, correo, contrasenia, telefono, direccion, rol_id, estado_id } = req.body;

      // Verificar si el usuario ya existe
      const existingUsuario = await Usuario.findOne({ where: { usuario } });
      if (existingUsuario) {
        return res.status(400).send('El nombre de usuario ya está en uso. Por favor, elige otro.');
      }

      // Verificar si el correo ya existe
      const existingCorreo = await Usuario.findOne({ where: { correo } });
      if (existingCorreo) {
        return res.status(400).send('El correo electrónico ya está registrado. Por favor, usa otro.');
      }

      // Crear el nuevo usuario si las verificaciones pasaron
      await Usuario.create({ usuario, correo, contrasenia, telefono, direccion, rol_id, estado_id });
      res.redirect('/usuarios');
    } catch (error) {
      console.error('Error al crear el usuario:', error);
      res.status(500).send('Error al crear el usuario');
    }
  },

  // Mostrar el formulario para editar un usuario
  showEditUsuario: async (req, res) => {
    try {
      const usuario = await Usuario.findByPk(req.params.id, {
        include: [
          { model: Rol, as: 'rol' },
          { model: Estado, as: 'estado' }
        ]
      });
      const roles = await Rol.findAll();  // Obtener los roles
      const estados = await Estado.findAll();  // Obtener los estados

      if (!usuario) {
        return res.status(404).send('Usuario no encontrado');
      }
      res.render('usuarios/editarUsuario', { usuario, roles, estados, title: 'Editar Usuario' });
    } catch (error) {
      console.error('Error al mostrar formulario de edición de usuario:', error);
      res.status(500).send('Error al cargar formulario de edición de usuario');
    }
  },

  // Actualizar un usuario
  updateUsuario: async (req, res) => {
    try {
      const { usuario, correo, contrasenia, telefono, direccion, rol_id, estado_id } = req.body;
      const user = await Usuario.findByPk(req.params.id);
      if (!user) {
        return res.status(404).send('Usuario no encontrado');
      }
      await user.update({ usuario, correo, contrasenia, telefono, direccion, rol_id, estado_id });
      res.redirect('/usuarios');
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
      res.status(500).send('Error al actualizar el usuario');
    }
  },

  // Eliminar un usuario
  deleteUsuario: async (req, res) => {
    try {
      const user = await Usuario.findByPk(req.params.id);
      if (!user) {
        return res.status(404).send('Usuario no encontrado');
      }
      await user.destroy();
      res.redirect('/usuarios');
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
      res.status(500).send('Error al eliminar el usuario');
    }
  }
};

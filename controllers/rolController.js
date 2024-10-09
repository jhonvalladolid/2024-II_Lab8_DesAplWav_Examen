const { Rol } = require('../models');

module.exports = {
  // Obtener todos los roles
  getRoles: async (req, res) => {
    try {
      const roles = await Rol.findAll();
      res.render('roles/listarRol', { roles, title: 'Lista de Roles' });
    } catch (error) {
      console.error('Error al obtener roles:', error);
      res.status(500).send('Error al obtener roles');
    }
  },

  // Obtener un solo rol por su ID (para editar)
  getRolById: async (req, res) => {
    try {
      const rol = await Rol.findByPk(req.params.id);
      if (!rol) {
        return res.status(404).send('Rol no encontrado');
      }
      res.render('roles/editarRol', { rol, title: 'Editar Rol' });
    } catch (error) {
      console.error('Error al obtener el rol:', error);
      res.status(500).send('Error al obtener el rol');
    }
  },

  // Crear un nuevo rol
  createRol: async (req, res) => {
    try {
      const { descripcion } = req.body;
      await Rol.create({ descripcion });
      res.redirect('/roles'); // Redirige a la lista de roles después de crear
    } catch (error) {
      console.error('Error al crear el rol:', error);
      res.status(500).send('Error al crear el rol');
    }
  },

  // Actualizar un rol
  updateRol: async (req, res) => {
    try {
      const { descripcion } = req.body;
      const rol = await Rol.findByPk(req.params.id);
      if (!rol) {
        return res.status(404).send('Rol no encontrado');
      }
      await rol.update({ descripcion });
      res.redirect('/roles');
    } catch (error) {
      console.error('Error al actualizar el rol:', error);
      res.status(500).send('Error al actualizar el rol');
    }
  },

  // Eliminar un rol
  deleteRol: async (req, res) => {
    try {
      const rol = await Rol.findByPk(req.params.id);
      if (!rol) {
        return res.status(404).send('Rol no encontrado');
      }
      await rol.destroy();
      res.redirect('/roles');
    } catch (error) {
      console.error('Error al eliminar el rol:', error);
      res.status(500).send('Error al eliminar el rol');
    }
  }
};

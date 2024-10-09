const { Estado } = require('../models');

module.exports = {
  // Obtener todos los estados
  getEstados: async (req, res) => {
    try {
      const estados = await Estado.findAll();
      res.render('estados/listarEstado', { estados, title: 'Lista de Estados' });
    } catch (error) {
      console.error('Error al obtener estados:', error);
      res.status(500).send('Error al obtener estados');
    }
  },

  // Obtener un estado por su ID
  getEstadoById: async (req, res) => {
    try {
      const estado = await Estado.findByPk(req.params.id);
      if (!estado) {
        return res.status(404).send('Estado no encontrado');
      }
      res.render('estados/editarEstado', { estado, title: 'Editar Estado' });
    } catch (error) {
      console.error('Error al obtener el estado:', error);
      res.status(500).send('Error al obtener el estado');
    }
  },

  // Crear un nuevo estado
  createEstado: async (req, res) => {
    try {
      const { descripcion } = req.body;
      const nuevoEstado = await Estado.create({ descripcion });
      res.redirect('/estados'); // Redirige a la lista de estados después de crear
    } catch (error) {
      console.error('Error al crear el estado:', error);
      res.status(500).send('Error al crear el estado');
    }
  },

  // Actualizar un estado
  updateEstado: async (req, res) => {
    try {
      const { descripcion } = req.body;
      const estado = await Estado.findByPk(req.params.id);
      if (!estado) {
        return res.status(404).send('Estado no encontrado');
      }
      await estado.update({ descripcion });
      res.redirect('/estados');
    } catch (error) {
      console.error('Error al actualizar el estado:', error);
      res.status(500).send('Error al actualizar el estado');
    }
  },

  // Eliminar un estado
  deleteEstado: async (req, res) => {
    try {
      const estado = await Estado.findByPk(req.params.id);
      if (!estado) {
        return res.status(404).send('Estado no encontrado');
      }
      await estado.destroy();
      res.redirect('/estados');
    } catch (error) {
      console.error('Error al eliminar el estado:', error);
      res.status(500).send('Error al eliminar el estado');
    }
  }
};

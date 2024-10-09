'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Usuarios', [
      {
        usuario: 'admin',
        correo: 'admin@example.com',
        contrasenia: 'admin123', // Contraseña actualizada a 'contrasenia'
        telefono: '123456789',
        direccion: 'Calle Principal 123',
        rol_id: 1, // ID del rol 'Administrador'
        estado_id: 1, // ID del estado 'Activo'
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        usuario: 'jvalladolid',
        correo: 'jv@gmail.com',
        contrasenia: '1234', // Contraseña actualizada a 'contrasenia'
        telefono: '917361003',
        direccion: 'Calle Principal 123',
        rol_id: 1, // ID del rol 'Administrador'
        estado_id: 1, // ID del estado 'Activo'
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        usuario: 'jorgesalas',
        correo: 'jorge@example.com',
        contrasenia: 'jorge123', // Contraseña actualizada a 'contrasenia'
        telefono: '987654321',
        direccion: 'Avenida Siempre Viva 742',
        rol_id: 2, // ID del rol 'Usuario'
        estado_id: 1, // ID del estado 'Activo'
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Usuarios', null, {});
  }
};

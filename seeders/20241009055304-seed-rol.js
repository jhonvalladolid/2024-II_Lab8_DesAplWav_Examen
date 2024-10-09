'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Rols', [
      {
        descripcion: 'Administrador',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Usuario',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Rols', null, {});
  }
};

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Estados', [
      {
        descripcion: 'Activo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Inactivo',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Estados', null, {});
  }
};

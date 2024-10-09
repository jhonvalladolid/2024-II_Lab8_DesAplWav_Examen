'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Estado extends Model {
    static associate(models) {
      // Un Estado tiene muchos Usuarios
      Estado.hasMany(models.Usuario, {
        foreignKey: 'estado_id',
        as: 'usuarios',
      });
    }
  }
  Estado.init({
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  }, {
    sequelize,
    modelName: 'Estado',
  });
  return Estado;
};

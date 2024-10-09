'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rol extends Model {
    static associate(models) {
      // Un Rol tiene muchos Usuarios
      Rol.hasMany(models.Usuario, {
        foreignKey: 'rol_id',
        as: 'usuarios',
      });
    }
  }
  Rol.init({
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  }, {
    sequelize,
    modelName: 'Rol',
  });
  return Rol;
};

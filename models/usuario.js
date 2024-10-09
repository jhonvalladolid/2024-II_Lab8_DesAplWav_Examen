'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      // Un Usuario pertenece a un Rol
      Usuario.belongsTo(models.Rol, {
        foreignKey: 'rol_id',
        as: 'rol',
      });

      // Un Usuario pertenece a un Estado
      Usuario.belongsTo(models.Estado, {
        foreignKey: 'estado_id',
        as: 'estado',
      });
    }
  }
  Usuario.init({
    usuario: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    contrasenia: {  // Cambiar a 'contrasenia'
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rol_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    estado_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};

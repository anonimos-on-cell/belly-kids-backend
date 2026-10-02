const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Categoria = sequelize.define('Categoria', {
  nome: { type: DataTypes.STRING, allowNull: false, unique: true },
  descricao: DataTypes.TEXT,
  icone: DataTypes.STRING
}, { tableName: 'categorias' });

module.exports = Categoria;
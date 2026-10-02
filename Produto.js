const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Categoria = require('./Categoria');

const Produto = sequelize.define('Produto', {
  nome: { type: DataTypes.STRING, allowNull: false },
  descricao: DataTypes.TEXT,
  preco: { type: DataTypes.DECIMAL(10,2), allowNull: false },
  estoque: { type: DataTypes.INTEGER, defaultValue: 0 },
  faixa_etaria: {
    type: DataTypes.ENUM('Recém-nascido','0 a 3 meses','3 a 6 meses','6 a 12 meses','1 a 3 anos','3 a 6 anos','Todas as idades'),
    allowNull: false
  },
  genero: { type: DataTypes.ENUM('Menino','Menina','Unissex'), defaultValue: 'Unissex' },
  material: DataTypes.STRING,
  composicao: DataTypes.STRING,
  certificacao_seguranca: { type: DataTypes.BOOLEAN, defaultValue: true },
  imagem: DataTypes.STRING,
  destaque: { type: DataTypes.BOOLEAN, defaultValue: false },
  categoria_id: { type: DataTypes.INTEGER }
}, { tableName: 'produtos' });

Produto.belongsTo(Categoria, { foreignKey: 'categoria_id' });
Categoria.hasMany(Produto, { foreignKey: 'categoria_id' });

module.exports = Produto;
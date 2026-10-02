const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Pedido = require('./Pedido');
const Produto = require('./Produto');

const ItemPedido = sequelize.define('ItemPedido', {
  pedido_id: { type: DataTypes.INTEGER, allowNull: false },
  produto_id: { type: DataTypes.INTEGER, allowNull: false },
  quantidade: { type: DataTypes.INTEGER, allowNull: false },
  preco_unitario: { type: DataTypes.DECIMAL(10,2), allowNull: false }
}, { tableName: 'itens_pedido' });

ItemPedido.belongsTo(Pedido, { foreignKey: 'pedido_id' });
ItemPedido.belongsTo(Produto, { foreignKey: 'produto_id' });
Pedido.hasMany(ItemPedido, { foreignKey: 'pedido_id' });

module.exports = ItemPedido;
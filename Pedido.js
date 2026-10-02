const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./Usuario');

const Pedido = sequelize.define('Pedido', {
  usuario_id: { type: DataTypes.INTEGER, allowNull: false },
  valor_total: { type: DataTypes.DECIMAL(10,2), allowNull: false },
  status: { type: DataTypes.ENUM('Pendente','Pago','Enviado','Entregue','Cancelado'), defaultValue: 'Pendente' },
  forma_pagamento: DataTypes.STRING,
  observacoes: DataTypes.TEXT,
  endereco_entrega: DataTypes.TEXT
}, { tableName: 'pedidos' });

Pedido.belongsTo(Usuario, { foreignKey: 'usuario_id' });

module.exports = Pedido;
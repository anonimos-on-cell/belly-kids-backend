const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcryptjs');

const Usuario = sequelize.define('Usuario', {
  nome: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true, validate: { isEmail: true } },
  senha: { type: DataTypes.STRING, allowNull: false },
  telefone: DataTypes.STRING,
  endereco: DataTypes.TEXT,
  tipo: { type: DataTypes.ENUM('cliente','admin'), defaultValue: 'cliente' }
}, {
  tableName: 'usuarios',
  hooks: {
    beforeCreate: async (usuario) => {
      if (usuario.senha) {
        const salt = await bcrypt.genSalt(10);
        usuario.senha = await bcrypt.hash(usuario.senha, salt);
      }
    }
  }
});

Usuario.prototype.compararSenha = async function(senha) {
  return await bcrypt.compare(senha, this.senha);
};

module.exports = Usuario;
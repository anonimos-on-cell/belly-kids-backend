require('dotenv').config();
const sequelize = require('../config/database');
const Usuario = require('../models/Usuario');

async function criarUsuarioAdmin() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conectado ao banco — Belly Kids');

    const [usuario, criado] = await Usuario.findOrCreate({
      where: { email: 'mariane@bellykids.com.br' },
      defaults: {
        nome: 'Mariane',
        email: 'mariane@bellykids.com.br',
        senha: 'Mariane1610',
        telefone: '(75) 9XXXX-XXXX',
        endereco: 'Santo Antônio de Jesus - BA',
        tipo: 'admin'
      }
    });

    if (criado) {
      console.log('\n✅ Usuário admin criado com SUCESSO!');
      console.log('═════════════════════════════════════');
      console.log('👤 Nome:     Mariane');
      console.log('📧 E-mail:   mariane@bellykids.com.br');
      console.log('🔑 Senha:    Mariane1610');
      console.log('🛡️  Perfil:   Administradora');
      console.log('═════════════════════════════════════\n');
    } else {
      console.log('ℹ️  Usuário Mariane já existe.\n');
    }

    await sequelize.close();
    process.exit(0);
  } catch (erro) {
    console.error('❌ Erro:', erro.message);
    await sequelize.close();
    process.exit(1);
  }
}

criarUsuarioAdmin();
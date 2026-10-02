require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');

require('./models/Categoria');
require('./models/Produto');
require('./models/Usuario');
require('./models/Pedido');
require('./models/ItemPedido');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/produtos', require('./routes/produtos'));
app.use('/api/categorias', require('./routes/categorias'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/pedidos', require('./routes/pedidos'));

app.get('/', (req, res) => {
  res.json({
    nome: 'Belly Kids',
    mensagem: '👶 Belly Kids — Produtos Especiais para os Pequeninos! API funcionando!',
    versao: '1.0.0'
  });
});

const PORT = process.env.PORT || 3000;

sequelize.sync({ alter: true }).then(() => {
  console.log('✅ Banco conectado — Belly Kids');
  app.listen(PORT, () => {
    console.log(`🚀 Belly Kids — Servidor rodando na porta ${PORT}`);
  });
}).catch(erro => console.error('❌ Erro de conexão:', erro));
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');
const { authMiddleware } = require('../middlewares/authMiddleware');

const gerarToken = (usuario) => jwt.sign(
  { id: usuario.id, nome: usuario.nome, email: usuario.email, tipo: usuario.tipo },
  process.env.JWT_SECRET,
  { expiresIn: process.env.JWT_EXPIRES_IN }
);

router.post('/registrar', async (req, res) => {
  try {
    const { nome, email, senha, telefone, endereco } = req.body;
    if (await Usuario.findOne({ where: { email } })) {
      return res.status(400).json({ erro: 'E-mail já cadastrado' });
    }
    const usuario = await Usuario.create({ nome, email, senha, telefone, endereco, tipo: 'cliente' });
    res.status(201).json({ mensagem: 'Bem-vindo(a) à Belly Kids! 🎉', token: gerarToken(usuario), usuario: { id: usuario.id, nome, email, tipo: usuario.tipo } });
  } catch { res.status(500).json({ erro: 'Erro no cadastro' }); }
});

router.post('/entrar', async (req, res) => {
  try {
    const { email, senha } = req.body;
    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario || !(await usuario.compararSenha(senha))) {
      return res.status(401).json({ erro: 'E-mail ou senha incorretos' });
    }
    res.json({ mensagem: `Bem-vindo(a) de volta, ${usuario.nome}!`, token: gerarToken(usuario), usuario: { id: usuario.id, nome: usuario.nome, email, tipo: usuario.tipo } });
  } catch { res.status(500).json({ erro: 'Erro no login' }); }
});

router.get('/perfil', authMiddleware, async (req, res) => {
  const usuario = await Usuario.findByPk(req.usuario.id, { attributes: { exclude: ['senha'] } });
  res.json(usuario);
});

module.exports = router;
const express = require('express');
const router = express.Router();
const Categoria = require('../models/Categoria');
const { authMiddleware, adminMiddleware } = require('../middlewares/authMiddleware');

const CATEGORIAS_PADRAO = [
  { nome: 'Roupas', descricao: 'Conjuntos, bodies, macacões', icone: '👗' },
  { nome: 'Fraldas & Higiene', descricao: 'Fraldas, toalhas, cuidados', icone: '🧻' },
  { nome: 'Alimentação', descricao: 'Mamadeiras, pratos, papinhas', icone: '🍼' },
  { nome: 'Brinquedos', descricao: 'Brinquedos seguros e educativos', icone: '🧸' },
  { nome: 'Quarto & Dormitório', descricao: 'Berços, roupas de cama, decoração', icone: '🛏️' },
  { nome: 'Passeio & Acessórios', descricao: 'Carrinhos, bolsas, acessórios', icone: '🚼' },
  { nome: 'Presentes', descricao: 'Kits e cestas para bebês', icone: '🎁' }
];

router.get('/', async (req, res) => {
  try { res.json(await Categoria.findAll({ order: [['nome','ASC']] })); }
  catch { res.status(500).json({ erro: 'Erro ao buscar categorias' }); }
});

router.post('/inicializar', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    for (const cat of CATEGORIAS_PADRAO) {
      await Categoria.findOrCreate({ where: { nome: cat.nome }, defaults: cat });
    }
    res.status(201).json({ mensagem: 'Categorias inicializadas!' });
  } catch { res.status(500).json({ erro: 'Erro ao inicializar' }); }
});

router.post('/', authMiddleware, adminMiddleware, async (req, res) => {
  try { res.status(201).json(await Categoria.create(req.body)); }
  catch { res.status(400).json({ erro: 'Categoria já existe' }); }
});

module.exports = router;
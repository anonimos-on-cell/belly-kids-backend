const express = require('express');
const router = express.Router();
const Produto = require('../models/Produto');
const Categoria = require('../models/Categoria');
const { authMiddleware, adminMiddleware } = require('../middlewares/authMiddleware');

router.get('/', async (req, res) => {
  try {
    const { categoria, faixa_etaria, genero, destaque } = req.query;
    const filtros = {};
    if (categoria) filtros.categoria_id = categoria;
    if (faixa_etaria) filtros.faixa_etaria = faixa_etaria;
    if (genero) filtros.genero = genero;
    if (destaque) filtros.destaque = destaque === 'true';

    const produtos = await Produto.findAll({ where: filtros, include: Categoria, order: [['id','DESC']] });
    res.json(produtos);
  } catch { res.status(500).json({ erro: 'Erro ao buscar produtos' }); }
});

router.get('/:id', async (req, res) => {
  try {
    const produto = await Produto.findByPk(req.params.id, { include: Categoria });
    if (!produto) return res.status(404).json({ erro: 'Produto não encontrado' });
    res.json(produto);
  } catch { res.status(500).json({ erro: 'Erro ao buscar produto' }); }
});

router.post('/', authMiddleware, adminMiddleware, async (req, res) => {
  try { res.status(201).json(await Produto.create(req.body)); }
  catch { res.status(400).json({ erro: 'Erro ao cadastrar produto' }); }
});

router.put('/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const produto = await Produto.findByPk(req.params.id);
    if (!produto) return res.status(404).json({ erro: 'Produto não encontrado' });
    await produto.update(req.body);
    res.json(produto);
  } catch { res.status(400).json({ erro: 'Erro ao atualizar produto' }); }
});

router.delete('/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const produto = await Produto.findByPk(req.params.id);
    if (!produto) return res.status(404).json({ erro: 'Produto não encontrado' });
    await produto.destroy();
    res.json({ mensagem: 'Produto removido com sucesso' });
  } catch { res.status(500).json({ erro: 'Erro ao excluir produto' }); }
});

module.exports = router;
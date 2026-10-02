const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middlewares/authMiddleware');
const Pedido = require('../models/Pedido');
const ItemPedido = require('../models/ItemPedido');
const Produto = require('../models/Produto');

router.post('/', authMiddleware, async (req, res) => {
  try {
    const { itens, forma_pagamento, observacoes, endereco_entrega } = req.body;
    if (!itens || itens.length === 0) return res.status(400).json({ erro: 'Carrinho vazio' });

    let valor_total = 0;
    const itensValidados = [];
    for (const item of itens) {
      const produto = await Produto.findByPk(item.produto_id);
      if (!produto) return res.status(404).json({ erro: `Produto ${item.produto_id} não existe` });
      if (produto.estoque < item.quantidade) return res.status(400).json({ erro: `Estoque insuficiente: ${produto.nome}` });
      const preco_unitario = parseFloat(produto.preco);
      valor_total += preco_unitario * item.quantidade;
      itensValidados.push({ produto, quantidade: item.quantidade, preco_unitario });
    }

    const pedido = await Pedido.create({ usuario_id: req.usuario.id, valor_total, forma_pagamento, observacoes, endereco_entrega, status: 'Pendente' });
    for (const iv of itensValidados) {
      await ItemPedido.create({ pedido_id: pedido.id, produto_id: iv.produto.id, quantidade: iv.quantidade, preco_unitario: iv.preco_unitario });
      await iv.produto.decrement('estoque', { by: iv.quantidade });
    }
    res.status(201).json({ mensagem: 'Pedido criado com sucesso! 🎉', pedido });
  } catch { res.status(500).json({ erro: 'Erro ao criar pedido' }); }
});

router.get('/meus', authMiddleware, async (req, res) => {
  const pedidos = await Pedido.findAll({ where: { usuario_id: req.usuario.id }, include: [{ model: ItemPedido, include: [Produto] }], order: [['createdAt','DESC']] });
  res.json(pedidos);
});

router.get('/', authMiddleware, async (req, res) => {
  if (req.usuario.tipo !== 'admin') return res.status(403).json({ erro: 'Acesso restrito' });
  res.json(await Pedido.findAll({ include: [{ model: ItemPedido, include: [Produto] }], order: [['createdAt','DESC']] }));
});

router.patch('/:id/status', authMiddleware, async (req, res) => {
  if (req.usuario.tipo !== 'admin') return res.status(403).json({ erro: 'Acesso restrito' });
  const pedido = await Pedido.findByPk(req.params.id);
  if (!pedido) return res.status(404).json({ erro: 'Pedido não encontrado' });
  await pedido.update({ status: req.body.status });
  res.json({ mensagem: `Status atualizado para "${pedido.status}"` });
});

module.exports = router;
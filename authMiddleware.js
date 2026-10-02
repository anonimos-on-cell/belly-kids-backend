const jwt = require('jsonwebtoken');
require('dotenv').config();

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ erro: 'Token não fornecido' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = decoded;
    next();
  } catch (erro) {
    return res.status(401).json({ erro: 'Token inválido ou expirado' });
  }
};

const adminMiddleware = (req, res, next) => {
  if (req.usuario.tipo !== 'admin') {
    return res.status(403).json({ erro: 'Acesso restrito ao administrador' });
  }
  next();
};

module.exports = { authMiddleware, adminMiddleware };
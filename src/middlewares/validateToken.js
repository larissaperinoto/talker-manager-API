const validateToken = async (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    next();
  } else {
    res.status(401).json({ message: 'Token não encontrado' });
  }
};

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization;

  if (token.length === 16) {
    next();
  } else {
    res.status(401).json({ message: 'Token inválido' });
  }
};

module.exports = { validateToken, verifyToken };

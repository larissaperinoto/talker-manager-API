const verifyName = (req, res, next) => {
  const { name } = req.body;

  if (name) {
    next();
  } else {
    res.status(400).json({ message: 'O campo "name" é obrigatório' });
  }
};

const verifyNameSize = (req, res, next) => {
  const { name } = req.body;

  if (name.length >= 3) {
    next();
  } else {
    res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }
};

module.exports = { verifyName, verifyNameSize };

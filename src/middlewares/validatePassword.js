const sentPassword = (req, res, next) => {
  const password = Object.keys(req.body).includes('password');

  if (password) {
    next();
  } else {
    res.status(400).json({ message: 'O campo "password" é obrigatório' });
  }
};

const verifyPassword = (req, res, next) => {
  const { password } = req.body;
  const validation = password.length >= 6;

  if (validation) {
    next();
  } else {
    res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
};

module.exports = { sentPassword, verifyPassword };

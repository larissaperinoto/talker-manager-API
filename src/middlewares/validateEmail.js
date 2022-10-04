const sentEmail = (req, res, next) => {
  const email = Object.keys(req.body).includes('email');

  if (email) {
    next();
  } else {
    res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }
};

const verifyEmail = (req, res, next) => {
  const { email } = req.body;
  const validation = (/\S+@\S+\.\S+/).test(email);

  if (validation) {
    next();
  } else {
    res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
};

module.exports = { sentEmail, verifyEmail };

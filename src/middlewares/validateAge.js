const verifyAge = (req, res, next) => {
  const { age } = req.body;

  if (age) {
    next();
  } else {
    res.status(400).json({ message: 'O campo "age" é obrigatório' });
  }
};

const verifyAgeSize = (req, res, next) => {
  const { age } = req.body;

  if (Number.isInteger(age) && age >= 18) {
    next();
  } else {
    res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }
};

module.exports = { verifyAge, verifyAgeSize };

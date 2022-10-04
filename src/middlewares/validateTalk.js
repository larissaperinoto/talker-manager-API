const verifyTalk = (req, res, next) => {
  const { talk } = req.body;

  if (talk) {
    next();
  } else {
    res.status(400).json({ message: 'O campo "talk" é obrigatório' });
  }
};

const verifyWatchedAt = (req, res, next) => {
  const { talk: { watchedAt } } = req.body;

  if (watchedAt) {
    next();
  } else {
    res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
  }
};

const verifyRate = (req, res, next) => {
  const { talk: { rate } } = req.body;

  if (!rate && rate !== 0) {
    return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
  }
    next();
};

const verifyWatchedAtFormat = (req, res, next) => {
  const { talk: { watchedAt } } = req.body;
  const dateFormat = /^(\d{2})\/(\d{2})\/(\d{4})$/;

  if (dateFormat.test(watchedAt)) {
    next();
  } else {
    res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
};

const verifyRateSize = (req, res, next) => {
  const { talk: { rate } } = req.body;
  console.log(rate);
  if (Number(rate) >= 1 && Number(rate) <= 5) {
    next();
  } else {
    res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }
};

module.exports = {
  verifyTalk,
  verifyWatchedAt,
  verifyRate,
  verifyWatchedAtFormat,
  verifyRateSize,
};
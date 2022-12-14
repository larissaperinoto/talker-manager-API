const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const path = require('path');

const { sentEmail, verifyEmail } = require('./middlewares/validateEmail');
const { sentPassword, verifyPassword } = require('./middlewares/validatePassword');
const { validateToken, verifyToken } = require('./middlewares/validateToken');
const { verifyName, verifyNameSize } = require('./middlewares/validateName');
const { verifyAge, verifyAgeSize } = require('./middlewares/validateAge');
const {
  verifyTalk,
  verifyWatchedAt,
  verifyRate,
  verifyWatchedAtFormat,
  verifyRateSize } = require('./middlewares/validateTalk');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

const talkerFile = path.resolve(__dirname, './talker.json');

app.get('/talker/search',
validateToken,
verifyToken, async (req, res) => {
  const { q } = req.query;
  const data = await fs.readFile(talkerFile, 'utf-8');
  const talkers = data && JSON.parse(data);
  const search = talkers.filter((talker) => talker.name.includes(q));
  res.status(HTTP_OK_STATUS).json(search);
});

app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const data = await fs.readFile(talkerFile, 'utf-8');
  const talker = JSON.parse(data).find((element) => Number(element.id) === Number(id));
  if (talker) {
    res.status(HTTP_OK_STATUS).json(talker);
  } else {
    res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
});

app.get('/talker', async (req, res) => {
  const data = await fs.readFile(talkerFile, 'utf-8');
  const talker = JSON.parse(data);
  const response = talker.length > 0 ? talker : [];
  res.status(HTTP_OK_STATUS).json(response);
});

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.post('/login', sentEmail, verifyEmail, sentPassword, verifyPassword, async (req, res) => {
  const token = Math.random().toFixed(16).substr(2);
  res.status(HTTP_OK_STATUS).json({ token });
});

app.use(validateToken, verifyToken);

app.delete('/talker/:id', async (req, res) => {
    const data = await fs.readFile(talkerFile, 'utf-8');
    const talkers = data && JSON.parse(data);
    const { id } = req.params;

    const talkersWithoutId = talkers.filter((talker) => Number(talker.id) !== Number(id));

    await fs.writeFile(talkerFile, JSON.stringify(talkersWithoutId));
    res.sendStatus(204);
});

app.use(verifyName,
  verifyNameSize,
  verifyAge,
  verifyAgeSize,
  verifyTalk,
  verifyWatchedAt,
  verifyRate,
  verifyWatchedAtFormat,
  verifyRateSize);

app.put('/talker/:id', async (req, res) => {
  console.log('PUT');
  const data = await fs.readFile(talkerFile, 'utf-8');
  const talkers = data && JSON.parse(data);
  const { id } = req.params;

  const talkerUpdate = { ...req.body, id: Number(id) };
  const talkersWithUpdate = talkers.map((talker) => {
    const update = Number(talker.id) === Number(id) ? talkerUpdate : talker;
    return update;
  });
  await fs.writeFile(talkerFile, JSON.stringify(talkersWithUpdate));
  return res.status(HTTP_OK_STATUS).json(talkerUpdate);
});

app.post('/talker', async (req, res) => {
  const data = await fs.readFile(talkerFile, 'utf-8');
  const talker = data && JSON.parse(data);
  const { id } = talker[talker.length - 1];
  const newTalker = { ...req.body, id: id + 1 };
  const newTalkerFile = [...talker, newTalker];
  await fs.writeFile(talkerFile, JSON.stringify(newTalkerFile));
  return res.status(201).json(newTalker);
});

app.listen(PORT, () => {
  console.log('Online');
});

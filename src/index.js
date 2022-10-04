const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const path = require('path');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const data = await fs.readFile(path.resolve(__dirname, './talker.json'), 'utf-8');
  const talker = JSON.parse(data).find((element) => Number(element.id) === Number(id));
  if (talker) {
    res.status(HTTP_OK_STATUS).json(talker);
  } else {
    res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
});

app.get('/talker', async (req, res) => {
  const data = await fs.readFile(path.resolve(__dirname, './talker.json'), 'utf-8');
  const talker = JSON.parse(data);
  const response = talker.length > 0 ? talker : [];
  res.status(HTTP_OK_STATUS).json(response);
});

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const token = Math.random().toFixed(16).substr(2);

  if (email && password) {
    res.status(HTTP_OK_STATUS).json({ token });
  }
});

console.log(Math.random().toFixed(16).substr(2));

app.listen(PORT, () => {
  console.log('Online');
});

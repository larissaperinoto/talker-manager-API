const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const path = require('path');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

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

app.listen(PORT, () => {
  console.log('Online');
});

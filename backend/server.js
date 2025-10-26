const express = require('express');
require('dotenv').config();
const { sequelize } = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ status: 'ok', env: process.env.NODE_ENV || 'development' });
});

async function start() {
  try {
    await sequelize.authenticate();
    console.log('Conectado ao banco via Sequelize');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error('Falha ao conectar:', err);
    process.exit(1);
  }
}

start();

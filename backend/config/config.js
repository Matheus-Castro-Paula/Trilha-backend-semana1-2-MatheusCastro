require('dotenv').config();

const common = {
  dialect: 'mysql',
  dialectOptions: {
    decimalNumbers: true
  }
};

module.exports = {
  development: {
    username: process.env.DB_USER || 'user',
    password: process.env.DB_PASSWORD || 'userpass',
    database: process.env.DB_NAME || 'loja',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
    ...common
  },
  test: {
    username: process.env.DB_USER || 'user',
    password: process.env.DB_PASSWORD || 'userpass',
    database: `${process.env.DB_NAME || 'loja'}_test`,
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
    ...common
  },
  production: {
    username: process.env.DB_USER || 'user',
    password: process.env.DB_PASSWORD || 'userpass',
    database: process.env.DB_NAME || 'loja',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
    ...common
  }
};

require('@babel/register');

const express = require('express');
const path = require('path');
const session = require('express-session');
const renderComponent = require('./middlewares/renderComponent');

const app = express();

app.use(renderComponent);

app.listen(3000, () => {
  console.log('Сервер запустился на 3000!');
});
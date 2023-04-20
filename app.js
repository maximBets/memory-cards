require('@babel/register');

const express = require('express');
const path = require('path');
const session = require('express-session');

const mainRoute = require('./routes/views/main.routes');

const authRouter = require('./routes/views/auth.routes');
const renderComponent = require('./middlewares/renderComponent');

const app = express();

// настраиваем сервер с помощью плагинов (миддлварок)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(renderComponent);

// подключаем роуты
app.use('/', mainRoute);
app.use('/auth', authRouter);

app.listen(3000, () => {
  console.log('Сервер пашет на 3000');
});

require('dotenv').config();
require('@babel/register');

const express = require('express');
const path = require('path');
const session = require('express-session');
const { PORT } = process.env;

const mainRoute = require('./routes/views/main.routes');

const authRouter = require('./routes/views/auth.routes');
const renderComponent = require('./middlewares/renderComponent');

const authApiRouter = require('./routes/views/auth.routes');

const app = express();

// app.use(session(sessionConfig));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(getUser);
app.use(renderComponent);
app.use(renderComponent);

app.use('/auth', authApiRouter);

// подключаем роуты
app.use('/', mainRoute);
app.use('/auth', authRouter);

app.listen(PORT, () => {
  console.log(`Сервер пашет на ${PORT}`);
});

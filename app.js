require('@babel/register');

const express = require('express');
const path = require('path');
const session = require('express-session');
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

app.listen(3000, () => {
  console.log('Сервер запустился на 3000!');
});
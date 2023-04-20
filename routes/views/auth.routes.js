const React = require('react');
const ReactDOMServer = require('react-dom/server');
const authRouter = require('express').Router();

const Register = require('../../components/Register');
const Login = require('../../components/Login');

authRouter.get('/register', (req, res) => {
  const element = React.createElement(Register);
  const html = ReactDOMServer.renderToStaticMarkup(element);
  res.send(`<!DOCTYPE html>${html}`);
});

authRouter.get('/login', (req, res) => {
  const element = React.createElement(Login);
  const html = ReactDOMServer.renderToStaticMarkup(element);
  res.send(`<!DOCTYPE html>${html}`);
});

authRouter.get('/logout', (req, res) => {
  // удаление сессии
  req.session.destroy(() => {
    // очищаем куку (название куки лежит в config/session.js свойство cookie.name)
    res.clearCookie('user_sid');
    res.redirect('/');
  });
});

module.exports = authRouter;

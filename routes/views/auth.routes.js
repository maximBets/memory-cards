const React = require('react');
const ReactDOMServer = require('react-dom/server');
const authRouter = require('express').Router();
const LoginPage = require('../../components/LoginPage');
const Register = require('../../components/Register');

authRouter.get('/login', (req, res) => {
  res.send(res.renderComponent(LoginPage));
});

authRouter.get('/register', (req, res) => {
  const element = React.createElement(Register);
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

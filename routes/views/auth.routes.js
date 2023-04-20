const React = require('react');
const ReactDOMServer = require('react-dom/server');
const authRouter = require('express').Router();
const LoginPage = require('../../components/LoginPage');

authRouter.get('/login', (req, res) => {
  res.send(res.renderComponent(LoginPage));
});

module.exports = authRouter;

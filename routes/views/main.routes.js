const route = require('express').Router();
const Main = require('../../components/Main');

route.get('/', (req, res) => {
  res.send(res.renderComponent(Main, {}));
});

module.exports = route;

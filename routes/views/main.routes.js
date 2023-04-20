const route = require('express').Router();
const Main = require('../../components/Main');
const ThemesPage = require('../../components/ThemesPage');
const { Theme } = require('../../db/models');

route.get('/', (req, res) => {
  // if(req.session.userId){
  //   console.log('++++++++++++++');
  // }
  res.send(res.renderComponent(Main, {}));
});

route.get('/themes', async (req, res) => {
  const themes = await Theme.findAll();
  res.send(res.renderComponent(ThemesPage, { themes }));
});

module.exports = route;

const route = require('express').Router();
const { where } = require('sequelize');
const Main = require('../../components/Main');
const ThemesPage = require('../../components/ThemesPage');
const { Theme, Card } = require('../../db/models');

route.get('/', (req, res) => {
  res.send(res.renderComponent(Main, {}));
});

route.get('/themes', async (req, res) => {
  const themes = await Theme.findAll();
  // !Здесь предполагается написание кода, который будет высчитывать количество выученных слов (learned: true)
  // !для каждой из тем, чтобы передать их в ThemePage
  // достаём всю информацию со столбцов id и learned
  const progressInfo = await Card.findAll({ attributes: ['id', 'theme_id'] });
  const dataForProgress = [];
  // убираем лишнее
  progressInfo.forEach((element) => {
    dataForProgress.push({ id: element.id, theme_id: element.theme_id });
  });
  // ...

  res.send(res.renderComponent(ThemesPage, { themes, progressInfo }));
});

module.exports = route;

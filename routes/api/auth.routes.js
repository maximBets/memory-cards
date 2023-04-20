const authApiRouter = require('express').Router();
const bcrypt = require('bcrypt');

const { User } = require('../../db/models');

authApiRouter.post('/register', async (req, res) => {
  const { login, password, password2 } = req.body;

  // проверяем, что пароли совпадают
  if (password !== password2) {
    res.status(403).json({ success: false, message: 'Пароли не совпадают' });
  }

  // проверяем, что в БД нет такого пользователя
  const existUser = await User.findOne({ where: { login } });
  if (existUser) {
    res
      .status(409)
      .json({ success: false, message: 'Такой пользователь уже есть' });
  }

  // создаём пользователя в БД

  const user = await User.create({
    login,
    password: await bcrypt.hash(password, 10),
  });

  // авторизация - запоминаем пользователя
  // req.session - хранилище сессии, которое уникально для каждого браузера

  req.session.userId = user.id;
  res
    .status(201)
    .json({ success: false, message: 'Вы успешно зарегестрировались' });
});

module.exports = authApiRouter;

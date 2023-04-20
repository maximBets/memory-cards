const authApiRouter = require('express').Router();
// const bcrypt = require('bcrypt');

const { User } = require('../../db/models');

authApiRouter.post('/login', async (req, res) => {
  const { login, password } = req.body;
  const user = await User.findOne({ where: { login } });

  if (!user || user.password !== password) {
    res.json({
      success: false,
      massege: 'Такого пользователя нет или пароли не совпадают',
    });
    return
  }

  req.session.userId = user.id;

  res.json({ success: true });
});

module.exports = authApiRouter
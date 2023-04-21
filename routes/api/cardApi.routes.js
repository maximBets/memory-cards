const cardApiRouter = require('express').Router();

const { UserCard } = require('../../db/models');

// добавляет существующую карточку в User
cardApiRouter.post('/:id', async (req, res) => {
  const id = Number(req.params.id);
  try {
    await UserCard.create({
      user_id: req.session.userId,
      card_id: id,
    });
    // зависит от реализации, что мы отправляем в json
    res.json({ success: true, message: 'Добавлено' });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
});

module.exports = cardApiRouter;
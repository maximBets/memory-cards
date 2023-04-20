const { User, Theme, Card } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    const janedoe = await User.create({ login: 'janedoe', password: 'janedoe1999' });

    await Theme.bulkCreate(
      [
        {
          theme_title: 'Дикие животные',
          Cards: [
            { eng_word: 'leopard', rus_word: 'барс', learned: true, user_id: janedoe.id },
            { eng_word: 'squirrel', rus_word: 'белка', learned: false, user_id: janedoe.id },
            { eng_word: 'fox', rus_word: 'лиса', learned: false, user_id: janedoe.id },
            { eng_word: 'wolf', rus_word: 'волк', learned: false, user_id: janedoe.id },
            { eng_word: 'hare', rus_word: 'заяц', learned: false, user_id: janedoe.id },
            { eng_word: 'wolverine', rus_word: 'россомаха', learned: false, user_id: janedoe.id },
            { eng_word: 'wild beer', rus_word: 'дикое пиво', learned: false, user_id: janedoe.id },
            { eng_word: 'deer', rus_word: 'олень', learned: false, user_id: janedoe.id },
            { eng_word: 'chipmunk', rus_word: 'бурундук', learned: false, user_id: janedoe.id },
            { eng_word: 'lynx', rus_word: 'рысь', learned: false, user_id: janedoe.id },
          ],
        },
        {
          theme_title: 'Фрукты',
          Cards: [
            { eng_word: 'ananas', rus_word: 'ананас', learned: false, user_id: janedoe.id },
            { eng_word: 'pear', rus_word: 'груша', learned: true, user_id: janedoe.id },
            { eng_word: 'grapes', rus_word: 'виноград', learned: true, user_id: janedoe.id },
            { eng_word: 'apricot', rus_word: 'абрикос', learned: false, user_id: janedoe.id },
            { eng_word: 'mango', rus_word: 'манго', learned: false, user_id: janedoe.id },
            { eng_word: 'peach', rus_word: 'персик', learned: false, user_id: janedoe.id },
            { eng_word: 'persimmon', rus_word: 'хурма', learned: false, user_id: janedoe.id },
            { eng_word: 'banana', rus_word: 'банан', learned: false, user_id: janedoe.id },
            { eng_word: 'kiwi', rus_word: 'киви', learned: false, user_id: janedoe.id },
            { eng_word: 'pomegranate', rus_word: 'гранат', learned: false, user_id: janedoe.id },
          ],
        },
        {
          theme_title: 'Части тела',
          Cards: [
            { eng_word: 'back', rus_word: 'спина', learned: false, user_id: janedoe.id },
            { eng_word: 'abdomen', rus_word: 'брюшная полость', learned: false, user_id: janedoe.id },
            { eng_word: 'palm', rus_word: 'ладонь', learned: false, user_id: janedoe.id },
            { eng_word: 'sole', rus_word: 'ступня', learned: true, user_id: janedoe.id },
            { eng_word: 'elbow', rus_word: 'локоть', learned: true, user_id: janedoe.id },
            { eng_word: 'shoulder', rus_word: 'плечо', learned: true, user_id: janedoe.id },
            { eng_word: 'chest', rus_word: 'грудь', learned: false, user_id: janedoe.id },
            { eng_word: 'leg', rus_word: 'нога', learned: false, user_id: janedoe.id },
            { eng_word: 'wrist', rus_word: 'запястье', learned: false, user_id: janedoe.id },
            { eng_word: 'knee', rus_word: 'колено', learned: false, user_id: janedoe.id },
          ],
        },
        {
          theme_title: 'Антонимы',
          Cards: [
            { eng_word: 'big', rus_word: 'большой', learned: false, user_id: janedoe.id },
            { eng_word: 'small', rus_word: 'маленький', learned: false, user_id: janedoe.id },
            { eng_word: 'new', rus_word: 'новый', learned: false, user_id: janedoe.id },
            { eng_word: 'old', rus_word: 'старый', learned: false, user_id: janedoe.id },
            { eng_word: 'heavy', rus_word: 'тяжелый', learned: false, user_id: janedoe.id },
            { eng_word: 'light', rus_word: 'легкий', learned: false, user_id: janedoe.id },
            { eng_word: 'soft', rus_word: 'мягкий', learned: true, user_id: janedoe.id },
            { eng_word: 'tough', rus_word: 'жесткий', learned: true, user_id: janedoe.id },
            { eng_word: 'clean', rus_word: 'чистый', learned: true, user_id: janedoe.id },
            { eng_word: 'dirty', rus_word: 'грязный', learned: true, user_id: janedoe.id },
          ],
        },
        {
          theme_title: 'Электроника',
          Cards: [
            { eng_word: 'laptop', rus_word: 'ноутбук', learned: false, user_id: janedoe.id },
            { eng_word: 'tablet', rus_word: 'планшет', learned: true, user_id: janedoe.id },
            { eng_word: 'fridge', rus_word: 'холодильник', learned: false, user_id: janedoe.id },
            { eng_word: 'vacuum cleaner', rus_word: 'пылесос', learned: false, user_id: janedoe.id },
            { eng_word: 'sewing machine', rus_word: 'швейная машинка', learned: false, user_id: janedoe.id },
            { eng_word: 'fan', rus_word: 'вентилятор', learned: false, user_id: janedoe.id },
            { eng_word: 'extractor hood', rus_word: 'вытяжка', learned: false, user_id: janedoe.id },
            { eng_word: 'scales', rus_word: 'весы', learned: false, user_id: janedoe.id },
            { eng_word: 'electric kettle', rus_word: 'электрический чайник', learned: false, user_id: janedoe.id },
            { eng_word: 'multicooker', rus_word: 'мультиварка', learned: false, user_id: janedoe.id },
          ],
        },
        {
          theme_title: 'Сказки',
          Cards: [
            { eng_word: 'king', rus_word: 'король', learned: false, user_id: janedoe.id },
            { eng_word: 'princess', rus_word: 'принцесса', learned: false, user_id: janedoe.id },
            { eng_word: 'knight', rus_word: 'рыцарь', learned: false, user_id: janedoe.id },
            { eng_word: 'giant', rus_word: 'великан', learned: true, user_id: janedoe.id },
            { eng_word: 'tower', rus_word: 'башня', learned: true, user_id: janedoe.id },
            { eng_word: 'throne', rus_word: 'трон', learned: false, user_id: janedoe.id },
            { eng_word: 'sword', rus_word: 'меч', learned: false, user_id: janedoe.id },
            { eng_word: 'shield', rus_word: 'щит', learned: false, user_id: janedoe.id },
            { eng_word: 'hald of the kindom', rus_word: 'полцарства', learned: false, user_id: janedoe.id },
            { eng_word: 'frog', rus_word: 'лягушка', learned: false, user_id: janedoe.id },
          ],
        },
      ],
      // include: [{ model: Theme, include: [Card] }],
      {
        include: [Card],
      },
    );
  },

  async down() {
    await User.destroy({ truncate: { cascade: true } });
  },
};

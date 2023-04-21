// импортируем модели ИЗ ПАПКИ models
const { Theme, Card } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    const theme = await Theme.bulkCreate(
      [
        {
          theme_title: 'Дикие животные',
          // Чтобы добавить Theme с еe картачками указываем Theme в виде
          // массива с ключом Cards (название таблицы)
          Cards: [
            {
              eng_word: 'leopard',
              rus_word: 'барс',
              learned: false,
            },
            {
              eng_word: 'squirrel',
              rus_word: 'белка',
              learned: false,
            },
            {
              eng_word: 'fox',
              rus_word: 'лиса',
              learned: false,
            },
            {
              eng_word: 'wolf',
              rus_word: 'волк',
              learned: false,
            },
            {
              eng_word: 'hare',
              rus_word: 'заяц',
              learned: false,
            },
            {
              eng_word: 'wolverine',
              rus_word: 'россомаха',
              learned: false,
            },
            {
              eng_word: 'wild beer',
              rus_word: 'дикое пиво',
              learned: false,
            },
            {
              eng_word: 'deer',
              rus_word: 'олень',
              learned: false,
            },
            {
              eng_word: 'chipmunk',
              rus_word: 'бурундук',
              learned: false,
            },
            {
              eng_word: 'lynx',
              rus_word: 'рысь',
              learned: false,
            },
          ],
        },
        {
          theme_title: 'Фрукты',
          Cards: [
            { eng_word: 'ananas', rus_word: 'ананас', learned: false },
            { eng_word: 'pear', rus_word: 'груша', learned: false },
            { eng_word: 'grapes', rus_word: 'виноград', learned: false },
            { eng_word: 'apricot', rus_word: 'абрикос', learned: false },
            { eng_word: 'mango', rus_word: 'манго', learned: false },
            { eng_word: 'peach', rus_word: 'персик', learned: false },
            { eng_word: 'persimmon', rus_word: 'хурма', learned: false },
            { eng_word: 'banana', rus_word: 'банан', learned: false },
            { eng_word: 'kiwi', rus_word: 'киви', learned: false },
            { eng_word: 'pomegranate', rus_word: 'гранат', learned: false },
          ],
        },
        {
          theme_title: 'Части тела',
          Cards: [
            { eng_word: 'back', rus_word: 'спина', learned: false },
            {
              eng_word: 'abdomen',
              rus_word: 'брюшная полость',
              learned: false,
            },
            { eng_word: 'palm', rus_word: 'ладонь', learned: false },
            { eng_word: 'sole', rus_word: 'ступня', learned: false },
            { eng_word: 'elbow', rus_word: 'локоть', learned: false },
            { eng_word: 'shoulder', rus_word: 'плечо', learned: false },
            { eng_word: 'chest', rus_word: 'грудь', learned: false },
            { eng_word: 'leg', rus_word: 'нога', learned: false },
            { eng_word: 'wrist', rus_word: 'запястье', learned: false },
            { eng_word: 'knee', rus_word: 'колено', learned: false },
          ],
        },
        {
          theme_title: 'Антонимы',
          Cards: [
            {
              eng_word: 'big',
              rus_word: 'большой',
              learned: false,
            },
            {
              eng_word: 'small',
              rus_word: 'маленький',
              learned: false,
            },
            {
              eng_word: 'new',
              rus_word: 'новый',
              learned: false,
            },
            {
              eng_word: 'old',
              rus_word: 'старый',
              learned: false,
            },
            {
              eng_word: 'heavy',
              rus_word: 'тяжелый',
              learned: false,
            },
            {
              eng_word: 'light',
              rus_word: 'легкий',
              learned: false,
            },
            {
              eng_word: 'soft',
              rus_word: 'мягкий',
              learned: true,
            },
            {
              eng_word: 'tough',
              rus_word: 'жесткий',
              learned: true,
            },
            {
              eng_word: 'clean',
              rus_word: 'чистый',
              learned: true,
            },
            {
              eng_word: 'dirty',
              rus_word: 'грязный',
              learned: true,
            },
          ],
        },
        {
          theme_title: 'Электроника',
          Cards: [
            { eng_word: 'laptop', rus_word: 'ноутбук', learned: false },
            { eng_word: 'tablet', rus_word: 'планшет', learned: false },
            { eng_word: 'fridge', rus_word: 'холодильник', learned: false },
            { eng_word: 'vacuum cleaner', rus_word: 'пылесос', learned: false },
            {
              eng_word: 'sewing machine',
              rus_word: 'швейная машинка',
              learned: false,
            },
            { eng_word: 'fan', rus_word: 'вентилятор', learned: false },
            { eng_word: 'extractor hood', rus_word: 'вытяжка', learned: false },
            { eng_word: 'scales', rus_word: 'весы', learned: false },
            {
              eng_word: 'electric kettle',
              rus_word: 'электрический чайник',
              learned: false,
            },
            {
              eng_word: 'multicooker',
              rus_word: 'мультиварка',
              learned: false,
            },
          ],
        },
        {
          theme_title: 'Сказки',
          Cards: [
            { eng_word: 'king', rus_word: 'король', learned: false },
            { eng_word: 'princess', rus_word: 'принцесса', learned: false },
            { eng_word: 'knight', rus_word: 'рыцарь', learned: false },
            { eng_word: 'giant', rus_word: 'великан', learned: true },
            { eng_word: 'tower', rus_word: 'башня', learned: true },
            { eng_word: 'throne', rus_word: 'трон', learned: false },
            { eng_word: 'sword', rus_word: 'меч', learned: false },
            { eng_word: 'shield', rus_word: 'щит', learned: false },
            {
              eng_word: 'hald of the kindom',
              rus_word: 'полцарства',
              learned: false,
            },
            { eng_word: 'frog', rus_word: 'лягушка', learned: false },
          ],
        },
      ],
      {
        // чтобы создать человека вместе с контактами прописываем эту опцию
        // в массив кладём ту модель, связь с которой мы хотим использовать
        include: [Card],
      }
    );
  },

  async down() {
    // удаляем все данные из таблицы People
    // { cascade: true } - позволяет удалить и все связанные данные
    await Theme.destroy({ truncate: { cascade: true } });
  },
};

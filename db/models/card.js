const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate({ Theme, User }) {
      this.belongsTo(Theme, { foreignKey: 'theme_id' });
      this.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Card.init(
    {
      theme_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Themes',
          key: 'id',
        },
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      eng_word: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      rus_word: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      learned: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: 'Card',
    },
  );
  return Card;
};

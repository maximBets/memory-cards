const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    static associate({ Card }) {
      this.hasMany(Card, { foreignKey: 'theme_id' });
    }
  }
  Theme.init(
    {
      theme_title: {
        allowNull: false,
        unique: true,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Theme',
    },
  );
  return Theme;
};

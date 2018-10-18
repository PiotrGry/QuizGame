'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        autoIncrement: true,
    },
    category_name: {
      type: DataTypes.TEXT,
      unique: true
    }
  }, {underscored: true});
  Category.associate = function(models) {
      Category.hasMany(models.Question, {
          foreignKey: 'category_id',
          as: 'questions',
      });
  };
  return Category;
};
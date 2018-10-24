const uuid = require('uuid/v4');
'use strict';

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
      id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: uuid(),
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


'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    category_id: DataTypes.UUID,
    category_name: DataTypes.TEXT
  }, {underscored: true});
  Category.associate = function(models) {
    // associations can be defined here
  };
  return Category;
};
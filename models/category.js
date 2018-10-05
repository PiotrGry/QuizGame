'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    category_name: DataTypes.TEXT
  }, {underscored: true});
  Category.associate = function(models) {
    // associations can be defined here
  };
  return Category;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    category_name: {
      type: DataTypes.TEXT,
      unique: true
    }
  }, {underscored: true});
  Category.associate = function(models) {
    // associations can be defined here
  };
  return Category;
};
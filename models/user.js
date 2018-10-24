'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    password: DataTypes.TEXT
  }, {underscored: true});
  User.associate = function(models) {
    User.belongsTo(models.Player);
  };
  return User;
};
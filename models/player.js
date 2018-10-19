const uuid = require('uuid/v4');

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Player = sequelize.define('Player', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: uuid(),

    },
    player_nick: {
      type: DataTypes.TEXT,
      unique: true,
  },
    player_score: DataTypes.INTEGER
  }, {underscored: true});
  Player.associate = function(models) {
    // associations can be defined here
  };
  return Player;
};









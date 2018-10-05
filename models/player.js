'use strict';
module.exports = (sequelize, DataTypes) => {
  const Player = sequelize.define('Player', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    player_nick: DataTypes.TEXT,
    player_score: DataTypes.INTEGER
  }, {underscored: true});
  Player.associate = function(models) {
    // associations can be defined here
  };
  return Player;
};








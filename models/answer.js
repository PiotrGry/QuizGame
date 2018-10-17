'use strict';
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    answer_text: DataTypes.TEXT
  }, {underscored: true});
  Answer.associate = function(models) {
      Answer.belongsTo(models.Question);
      Answer.hasOne(models.Question, { foreignKey: 'correct_answer_id' })
  };
  return Answer;
};
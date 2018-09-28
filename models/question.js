'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    question_id: DataTypes.UUID,
    question_description: DataTypes.TEXT,
  }, {underscored: true});
  Question.associate = function(models) {
    Question.belongsTo(models.Category);
  };
  return Question;
};
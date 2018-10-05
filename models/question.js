'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    question_description: {
      type: DataTypes.TEXT,
      unique: true,
    },
  }, {underscored: true});
  Question.associate = function(models) {
    Question.belongsTo(models.Category);
  };
  return Question;
};
const uuid = require('uuid/v4');

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: uuid(),
    },
    question_description: {
      type: DataTypes.TEXT,
      unique: true,
    },
  }, {underscored: true});
  Question.associate = function(models) {
    Question.belongsTo(models.Category);
    Question.hasMany(models.Answer, {
                foreignKey: 'question_id',
                as: 'answers',
            });
  };
  return Question;
};

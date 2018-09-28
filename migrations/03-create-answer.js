'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Answers', {
      answer_id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID
      },
      answer_text: {
        type: Sequelize.TEXT
      },
      question_id: {
        foreignKey: true,
        type: Sequelize.UUID
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Answers');
  }
};



'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Questions', {
      question_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      question_description: {
        type: Sequelize.TEXT
      },
      category_id: {
        type: Sequelize.UUID
      },
        correct_answer_id: {
        type: Sequelize.UUID
        }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Questions');
  }
};
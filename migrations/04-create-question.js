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
        type: Sequelize.TEXT,
        allowNull: false,
      },
      createdAt: {
          type: Sequelize.DATE
      },
      updatedAt: {
          type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Questions');
  }
};
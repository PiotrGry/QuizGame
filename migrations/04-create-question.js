'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('questions', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      question_description: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true,
      },
      created_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
      },
      updated_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('questions');
  }
};
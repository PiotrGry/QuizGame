'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Questions', {
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
      category_id: {
        type: Sequelize.UUID,
        foreignKey: true,
      },
      correct_answer_id: {
        type: Sequelize.UUID,
        foreignKey: true,
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
    return queryInterface.dropTable('Questions');
  }
};
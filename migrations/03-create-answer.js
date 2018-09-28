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
        type: Sequelize.TEXT,
          allowNull: false,
      },
      createdAt: {
          type: Sequelize.DATE
      },
      updatedAt: {
          type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Answers');
  }
};



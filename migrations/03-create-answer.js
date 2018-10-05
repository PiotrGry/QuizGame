'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Answers', {
      id: {
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
      },
      answer_text: {
        type: Sequelize.TEXT,
          allowNull: false,
      },
      created_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
      },
      updated_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Answers');
  }
};



'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
          'Users',
          'user_id',
          {
              type: Sequelize.UUID,
              references: {
                  model: 'Players',
                  key: 'player_id',
              },
              onUpdate: 'CASCADE',
              onDelete: 'SET NULL',
          }
      )
  },

  down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn(
            'Users',
            'user_id'
        )
  }
};
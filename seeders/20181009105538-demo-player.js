'use strict';

const uuidv4 = require('uuid/v4');

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Players', [{
            id: uuidv4(),
            player_nick: 'Tamtamcio',
            player_score: 80,
            created_at: Sequelize.fn('NOW'),
            updated_at: Sequelize.fn('NOW'),
        },
            {
                id: uuidv4(),
                player_nick: 'Sabina',
                player_score: 55,
                created_at: Sequelize.fn('NOW'),
                updated_at: Sequelize.fn('NOW'),
            },
            {
                id: uuidv4(),
                player_nick: 'Tomasz',
                player_score: 33,
                created_at: Sequelize.fn('NOW'),
                updated_at: Sequelize.fn('NOW'),
            },
            {
                id: uuidv4(),
                player_nick: 'Johny',
                player_score: 33,
                created_at: Sequelize.fn('NOW'),
                updated_at: Sequelize.fn('NOW'),
            },
            {
                id: uuidv4(),
                player_nick: 'Chomik',
                player_score: 6,
                created_at: Sequelize.fn('NOW'),
                updated_at: Sequelize.fn('NOW'),
            },
            {
                id: uuidv4(),
                player_nick: 'Kocur',
                player_score: 7770,
                created_at: Sequelize.fn('NOW'),
                updated_at: Sequelize.fn('NOW'),
            },
            {
                id: uuidv4(),
                player_nick: 'Bernie',
                player_score: 430,
                created_at: Sequelize.fn('NOW'),
                updated_at: Sequelize.fn('NOW'),
            },
            {
                id: uuidv4(),
                player_nick: 'Borsuk',
                player_score: 9,
                created_at: Sequelize.fn('NOW'),
                updated_at: Sequelize.fn('NOW'),
            },

        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Players', null, {});
    }
};

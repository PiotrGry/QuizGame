'use strict';
const uuidv4 = require('uuid/v4');

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Answers', [{
            id: uuidv4(),
            answer_text: 'A lot',
            created_at: Sequelize.fn('NOW'),
            updated_at: Sequelize.fn('NOW'),
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Answers', null, {});
    }
};
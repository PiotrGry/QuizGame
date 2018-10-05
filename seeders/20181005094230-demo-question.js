'use strict';
const uuidv4 = require('uuid/v4');

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Questions', [{
            id: uuidv4(),
            question_description: 'How many legs does a kitty have?',
            created_at: Sequelize.fn('NOW'),
            updated_at: Sequelize.fn('NOW'),
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Questions', null, {});
    }
};
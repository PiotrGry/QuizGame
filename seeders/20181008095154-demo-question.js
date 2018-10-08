'use strict';
const uuidv4 = require('uuid/v4');

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Questions', [{
            id: uuidv4(),
            question_description: 'How many legs does cats have?',
            category_id: 'd4fcbe92-d89d-46a4-a173-1098be2238fb',
            created_at: Sequelize.fn('NOW'),
            updated_at: Sequelize.fn('NOW'),
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Questions', null, {});
    }
};



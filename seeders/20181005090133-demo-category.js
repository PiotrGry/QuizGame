'use strict';
const uuidv4 = require('uuid/v4');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('categories', [{
            id: uuidv4(),
            category_name: 'Kittieeees',
            created_at: Sequelize.fn('NOW'),
            updated_at: Sequelize.fn('NOW'),
        }], {returning: true}).then(function(categoryArr) {
            const category_id = categoryArr[0].id;

            return queryInterface.bulkInsert('questions', [{
                id: uuidv4(),
                question_description: 'How many legs does cats have?',
                category_id: category_id,
                created_at: Sequelize.fn('NOW'),
                updated_at: Sequelize.fn('NOW'),
            }], {});
        })
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('questions', null, {});
        await queryInterface.bulkDelete('categories', null, {});
    }
};




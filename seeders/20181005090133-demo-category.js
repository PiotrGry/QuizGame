'use strict';
const uuidv4 = require('uuid/v4');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('categories', [{
            id: uuidv4(),
            category_name: 'Kittieeees',
            created_at: Sequelize.fn('NOW'),
            updated_at: Sequelize.fn('NOW'),
        }], {});

        const categories = await queryInterface.sequelize.query(`SELECT id FROM categories;`);

        const id = categories[0][0].id;

        return await queryInterface.bulkInsert('questions', [{
            id: uuidv4(),
            question_description: 'How many legs does cats have?',
            category_id: id,
            created_at: Sequelize.fn('NOW'),
            updated_at: Sequelize.fn('NOW'),
        }], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('questions', null, {});
        await queryInterface.bulkDelete('categories', null, {});
    }
};

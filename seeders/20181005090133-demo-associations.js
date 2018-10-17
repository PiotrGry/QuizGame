'use strict';
const uuidv4 = require('uuid/v4');
const Question = require('../models').Question;

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Categories', [{
            id: uuidv4(),
            category_name: 'Kittieeees',
            created_at: Sequelize.fn('NOW'),
            updated_at: Sequelize.fn('NOW'),
        }], {returning: true}).then(function(categoryArr) {
            const categoryId = categoryArr[0].id;

            return queryInterface.bulkInsert('Questions', [{
                id: uuidv4(),
                question_description: 'How many legs does cats have?',
                category_id: categoryId,
                created_at: Sequelize.fn('NOW'),
                updated_at: Sequelize.fn('NOW'),
            }], {returning: true}).then(async function(questionArr) {
                const questionId = questionArr[0].id;

                return await queryInterface.bulkInsert('Answers', [{
                    id: uuidv4(),
                    answer_text: '5',
                    question_id: questionId,
                    created_at: Sequelize.fn('NOW'),
                    updated_at: Sequelize.fn('NOW'),
                },
                {
                    id: uuidv4(),
                    answer_text: '8',
                    question_id: questionId,
                    created_at: Sequelize.fn('NOW'),
                    updated_at: Sequelize.fn('NOW'),
                },
                {
                    id: uuidv4(),
                    answer_text: '10',
                    question_id: questionId,
                    created_at: Sequelize.fn('NOW'),
                    updated_at: Sequelize.fn('NOW'),
                },
                {
                    id: uuidv4(),
                    answer_text: '4',
                    question_id: questionId,
                    created_at: Sequelize.fn('NOW'),
                    updated_at: Sequelize.fn('NOW'),
                }], {returning: true}).then(async function(answerArr) {

                    //TO DO: adding correct_answer_id to question
                })
            });
        })
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Questions', null, {});
        await queryInterface.bulkDelete('Categories', null, {});
        await queryInterface.bulkDelete('Answers', null, {});
    }
};




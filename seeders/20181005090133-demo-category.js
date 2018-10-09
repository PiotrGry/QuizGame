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

                    const correctAnswerId = answerArr[3].id;

                    const questionsArr = await queryInterface.sequelize.query(
                        `SELECT * FROM Questions;`
                    );

                    const questionId = questionsArr[0][0].id;

                    Question.update({correct_answer_id: correctAnswerId}, { where: { id: questionId } }).then((result) => {
                        // here your result is simply an array with number of affected rows
                        console.log(result);
                        // [ 1 ]
                    });
                    //adding correct_answer_id isnt working
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




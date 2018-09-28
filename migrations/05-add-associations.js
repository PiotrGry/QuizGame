'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
            'Questions', // name of Source model
            'category_id', // name of the key we're adding
            {
                type: Sequelize.UUID,
                references: {
                    model: 'Categories', // name of Target model
                    key: 'category_id', // key in Target model that we're referencing
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            }
        ).then(() => {
            return queryInterface.addColumn(
                'Answers', // name of Source model
                'question_id', // name of the key we're adding
                {
                    type: Sequelize.UUID,
                    references: {
                        model: 'Questions', // name of Target model
                        key: 'question_id', // key in Target model that we're referencing
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL',
        })
    }).then(() => {
            // Payment hasOne Order
            return queryInterface.addColumn(
                'Questions', // name of Target model
                'correct_answer_id', // name of the key we're adding
                {
                    type: Sequelize.UUID,
                    references: {
                        model: 'Answers', // name of Source model
                        key: 'answer_id',
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL',
                }
            );
        });},

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn(
            'Questions', // name of Source model
            'category_id' // key we want to remove
        ).then(() => {
            return queryInterface.removeColumn(
                'Answers', // name of Source model
                'question_id' // key we want to remove
            )
        }).then(() => {
            return queryInterface.removeColumn(
                'Questions', // name of Source model
                'correct_answer_id' // key we want to remove
            )
        });
    }
};




// Answer.hasOne(models.Question, { foreignKey: 'correct_answer_id' })
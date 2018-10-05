'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
            'Questions',
            'category_id',
            {
                type: Sequelize.UUID,
                references: {
                    model: 'Categories',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            }
        ).then(() => {
            return queryInterface.addColumn(
                'Answers',
                'question_id',
                {
                    type: Sequelize.UUID,
                    references: {
                        model: 'Questions',
                        key: 'id',
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL',
        })
    }).then(() => {

            return queryInterface.addColumn(
                'Questions',
                'correct_answer_id',
                {
                    type: Sequelize.UUID,
                    references: {
                        model: 'Answers',
                        key: 'id',
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL',
                }
            );
        });},

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn(
            'Questions',
            'category_id'
        ).then(() => {
            return queryInterface.removeColumn(
                'Answers',
                'question_id'
            )
        }).then(() => {
            return queryInterface.removeColumn(
                'Questions',
                'correct_answer_id'
            )
        });
    }
};





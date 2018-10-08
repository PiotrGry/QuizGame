'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
            'questions',
            'category_id',
            {
                type: Sequelize.UUID,
                references: {
                    model: 'categories',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            }
        ).then(() => {
            return queryInterface.addColumn(
                'answers',
                'question_id',
                {
                    type: Sequelize.UUID,
                    references: {
                        model: 'questions',
                        key: 'id',
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL',
        })
    }).then(() => {

            return queryInterface.addColumn(
                'questions',
                'correct_answer_id',
                {
                    type: Sequelize.UUID,
                    allowNull: true,

                    references: {
                        model: 'answers',
                        key: 'id',
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL',
                }
            );
        });},

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn(
            'questions',
            'category_id'
        ).then(() => {
            return queryInterface.removeColumn(
                'answers',
                'question_id'
            )
        }).then(() => {
            return queryInterface.removeColumn(
                'questions',
                'correct_answer_id'
            )
        });
    }
};





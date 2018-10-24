const Question = require("../models").Question;
const Answer = require("../models").Answer;
const uuid = require('uuid/v4');

module.exports = {
    list(req, res) {
        return Question.findAll()
            .then((question) => res.status(200).send(question))
            .catch((error) => {
                res.status(400).send(error.message);
            });
    },

    findOne(req, res) {
        return Question.findAll({
            where: {
                id: req.params.id
            }
        }).then((question) => res.status(200).send(question))
            .catch((error) => {
                res.status(400).send(error.message);
            });
    },

//Method add needs JSON like this:
// {
//     "question_description": "Ile kot ma uszu",
//     "correct_answer": "2",
//     "wrong_answer_1": "3",
//     "wrong_answer_2": "4",
//     "wrong_answer_3": "5"
// }

    add(req, res) {
        const categoryId = req.params.id;
        const questionDescription = req.body.question_description;

        return Question.create({
                question_description: questionDescription,
                category_id: categoryId,
            }
        ).then((question) => {
            const questionId = question.dataValues.id;
            const correctAnswerText = req.body.correct_answer;

            return Answer.create({
                answer_text: correctAnswerText,
                question_id: questionId,
            })
        }).then(answer => {
            const answerId = answer.dataValues.id;
            const questionId = answer.dataValues.question_id;

            return Question.update(
                {correct_answer_id: answerId},
                {returning: true,
                    where:
                        {id: questionId}
                },
            )
        })
            .then(question => {
            const questionId = question[1][0].dataValues.id;
            const wrongAnswer1 = req.body.wrong_answer_1;
            const wrongAnswer2 = req.body.wrong_answer_2;
            const wrongAnswer3 = req.body.wrong_answer_3;

            return Answer.bulkCreate([{
                id: uuid(),
                answer_text: wrongAnswer1,
                question_id: questionId
            },
                {
                    id: uuid(),
                    answer_text: wrongAnswer2,
                    question_id: questionId
                },{
                    id: uuid(),
                    answer_text: wrongAnswer3,
                    question_id: questionId
                }
            ])
        })
            .then(answers => {
            res.status(201).send(answers);
        }
        ).catch(error => {
                res.status(400).send(error.message);
            })
    }
};



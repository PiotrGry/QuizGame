const Question = require("../models").Question;

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

    add(req, res) {
        const categoryId = req.params.id;
        const questionDescription = req.body.question_description;

        return Question.create({
                question_description: questionDescription,
                category_id: categoryId,
            }
        ).then((category) => {
            res.status(201).send(category)
        })
            .catch(error => {
                res.status(400).send(error.message);
            })
    }
};



const Category = require("../models").Category;
const Question = require("../models").Question;
const Answer = require("../models").Answer;

module.exports = {
    list(req, res) {
        return Category.findAll()
            .then((categories) => res.status(200).send(categories))
            .catch((error) => {
                res.status(400).send(error.message);
            });
    },

    findById(req, res) {
        return Category.findById(req.params.id, {
                include: [{
                    model: Question,
                    as: 'questions',
                    include: [{
                        model: Answer,
                        as: 'answers',
                    }]
                }],
            }).then((category) => res.status(200).send(category))
            .catch((error) => {
                res.status(404).send(error.message);
            });
    }
};








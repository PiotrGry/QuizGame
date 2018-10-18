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
    }
};


//findOne
//pod dodawaniu answer trzeba wyciągnąć question i dodać correct_answer_id do niego ale także do answer trzeba dodać question_id więc findOne się motzno przyda
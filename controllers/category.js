const Category = require("../models").Category;
const Question = require("../models").Question;

module.exports = {
    list(req, res) {
        return Category.findAll()
            .then((categories) => res.status(200).send(categories))
            .catch((error) => {
                res.status(400).send(error);
            });
    },

    findById(req, res) {
        console.log(req.params.id)
        return Category.findById(req.params.id, {
                include: [{
                    model: Question,
                    as: 'questions'
                }],
            }).then((category) => res.status(200).send(category))
            .catch((error) => {
                res.status(400).send(error);
            });
    }
};





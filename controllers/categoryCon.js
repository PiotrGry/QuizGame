const categoryDao = require('../db/categoryDAO');
const categoryCon = {};

categoryCon.getAllCategories = function (req, res) {
    categoryDao.getAllCategories().then((result)=>{
        res.json(result);
        res.end();
    });
};

categoryCon.getQuestionWithCorrectAnswer = function(req, res){
    categoryDao.getQuestions(req).then((result) =>{
        res.json(result);
        res.end();
    })
        .catch(()=>{
            res.sendStatus(404);
    })
};

module.exports = categoryCon;
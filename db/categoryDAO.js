const Category = require("../models/Category");
const Answer = require("../models/Answer");
const Question = require("../models/Question");
const pool = require ("./db");
const categoryDao = {};
const Promise = require('promise');

categoryDao.getAllCategories = function () {
    return new Promise((resolve, reject) =>{
        pool.connect((err, client, done) => {
            if (err){
                return reject(err);
            }else {
                const getAllCategories = `SELECT category_name from categories`;
                client.query(getAllCategories, (err, result) => {
                    done();
                    if (err) {
                        console.log(err.stack)
                    } else {
                        let categories = createCategories(result.rows);
                        return resolve(categories);
                    }
                });
            }
        })
    });
};

categoryDao.getQuestionWithCorrectAnswer= function(req) {
    return new Promise((resolve, reject)=> {
        pool.connect((err, client, done) => {
            if (err) {
                return reject(err);
            }
            const getQuestionWithCorrectAnswerQuery = `select q.question_id, q.question_description, a.answer_text as correct_answer
                                                        from questions q
                                                            join categories c2 on q.category_id = c2.category_id
                                                            join answers a on q.correct_answer_id = a.answer_id
                                                        where category_name = '${req.params.category_name}'
                                                        order by random()
                                                        limit 1`;

            client.query(getQuestionWithCorrectAnswerQuery, (err, result) => {
                done();
                if (err) {
                    console.error(err);
                } else {
                    //start
                    if (result.rows.length === 0) {
                        return reject(new Error("Category not found"));
                    } else {
                        let questionObj = result.rows[0];
                        getAnswers(questionObj.question_id).then((answers) => {
                            return createQuestion(questionObj, answers);
                        }).then((question) => {
                            return resolve(question);
                        }).catch((err) => {
                            console.log(err);
                        });
                    }
                }
            });
        });
    });
};

function getAnswers(question_id) {
    return new Promise((resolve, reject) => {
        pool.connect((err, client, done) => {
            if (err){
                return reject(err);
            }else {
                const getAnswers = `SELECT answer_text FROM answers WHERE question_id = '${question_id}'`;
                client.query(getAnswers, (err, result) => {
                    done();
                    if (err) {
                        console.log(err.stack)
                    } else {
                        let answers = createAnswers(result.rows);
                       return  resolve(answers);
                    }
                });
            }
        });
    });
}

function createAnswers(answersArr) {
    const answers = [];

    for (i = 0;  i < answersArr.length; i++) {
        let answer = new Answer(answersArr[i].answer_text);
        answers.push(answer);
    }
    return answers;
}

function createCategories(categArr) {
    const categories = [];

    for (i = 0;  i < categArr.length; i++) {
        let category = new Category(categArr[i].category_id, categArr[i].category_name,);
        categories.push(category);
    }
    return categories;
}

function createQuestion(questionObj, answers) {
    return new Question(questionObj.question_id, questionObj.question_description, answers, questionObj.correct_answer);
}

module.exports = categoryDao;


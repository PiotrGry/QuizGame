const Category = require("../models/Category");
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

function createCategories(categArr) {
    const categories = [];

    for (i = 0;  i < categArr.length; i++) {
        let category = new Category(categArr[i].category_id, categArr[i].category_name,);
        categories.push(category);
    }
    return categories;
}


categoryDao.getQuestionWithCorrectAnswer= function(req) {
    return new Promise((resolve, reject)=> {
        pool.connect((err, client, done) => {
            if (err) {
                return reject(err);
            }
            const getQuestionWithCorrectAnswerQuery = `select q.question_description, a.answer_text as correct_answer
                                                        from questions q
                                                            join categories c2 on q.category_id = c2.category_id
                                                            join answers a on q.correct_answer_id = a.answer_id
                                                        where category_name = '${req.params.category_name}'
                                                        order by random()
                                                        limit 1`;

            client.query(getQuestionWithCorrectAnswerQuery, (err, result) => {
                done();
                if (err) {
                    console.log(console.error(err));
                } else {

                    return resolve(result.rows);
                }
            });
        });
    });
};

module.exports = categoryDao;
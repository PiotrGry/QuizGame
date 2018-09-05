let Category = require("../models/Category");
const pool = require ("./db");
const categoryDao = {};
const Promise = require('promise');

function getAllCategories() {
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
                        return resolve(result.rows);
                    }
                })
            }
        })
    });
}

module.export = categoryDao;
const pool = require('./db');
const authDAO = {};
const Promise = require('promise');

authDAO.findUser = function(userNick) {

    return new Promise((resolve, reject) => {

            pool.connect((err, client, done) => {
                if (err) {
                    console.log(err);
                    return reject(err);
                } else {
                    client.query(`SELECT * FROM users WHERE user_nick='${userNick}';`, (err, result) => {
                        done();

                        if (err) {
                            console.log(err.stack)
                        } else {
                            console.log(result.rows);
                            return resolve(result.rows);
                        }
                    })
                }

            });
        }
    )};

module.exports = authDAO;
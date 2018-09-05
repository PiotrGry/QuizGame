let User = require("./models/User");
const pool = require('./db');
const userDao = {};
const Promise = require('promise');

userDao.findUsers = function() {

    return new Promise((resolve, reject) =>
    {
        pool.connect((err, client, done) => {
            if (err) {
                return reject(err);
            } else {
                client.query('SELECT * FROM players;', (err, result) => {
                    done();
                    if (err) {
                        console.log(err.stack)
                    } else {
                        return resolve(result.rows[0]);
                    }
                })
            }

        });
    }
    )};

module.exports = userDao;

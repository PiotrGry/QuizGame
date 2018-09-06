const pool = require('./db');
const userDao = {};
const Promise = require('promise');
const User = require('../models/User');

userDao.findUsers = function() {

    return new Promise((resolve, reject) => {

        pool.connect((err, client, done) => {
            if (err) {
                return reject(err);
            } else {
                client.query('SELECT * FROM players;', (err, result) => {
                    done();
                    if (err) {
                        console.log(err.stack)
                    } else {
                        let users = createUser(result.rows);
                        return resolve(users);
                    }
                })
            }

        });
    }
)};

userDao.addUser = function(userName) {

    return new Promise((resolve, reject) => {

        pool.connect((err, client, done) => {
            if (err) {
                return reject(err);
            } else {
                client.query('INSERT INTO players(user_nick) VALUES($1);', [userName], (err, result) => {
                    done()
                    if (err) {
                        console.log(err.stack)
                    } else {
                        let users = createUser(result.rows);
                        return resolve(users);
                    }
                })
            }
        })
    });
};

function createUser(usersArr) {
    const users = [];

    for (i = 0;  i < usersArr.length; i++) {
        let user = new User(usersArr[i].user_id, usersArr[i].user_nick, usersArr[i].user_score);
        users.push(user);
    }
    return users;
}

module.exports = userDao;

const pool = require('./db');
const playerDAO = {};
const Promise = require('promise');
const User = require('../models/Player');

playerDAO.findUsers = function() {

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
                        let users = createPlayer(result.rows);
                        return resolve(users);
                    }
                })
            }

        });
    }
)};

playerDAO.addUser = function(userName) {

    return new Promise((resolve, reject) => {

        pool.connect((err, client, done) => {
            if (err) {
                return reject(err);
            } else {
                client.query('INSERT INTO players(player_nick) VALUES($1);', [userName], (err, result) => {
                    done();
                    if (err) {
                        console.log(err.stack)
                    } else {
                        let users = createPlayer(result.rows);
                        return resolve(users);
                    }
                })
            }
        })
    });
};

playerDAO.findHighscores = function() {
    return new Promise((resolve, reject) => {
        pool.connect((err, client, done) => {
            if (err) {
                return reject(err);
            } else {
                client.query('SELECT player_nick, player_score FROM players ' +
                    'ORDER BY player_score ' +
                    'LIMIT 10;', (err, result) => {

                    done();
                    if (err) {
                        console.log(err.stack);
                    } else {
                        let theBestUsers = createPlayer(result.rows);
                        return resolve(theBestUsers);
                    }
                })
            }
        })
    })
};

function createPlayer(usersArr) {
    const users = [];

    for (i = 0;  i < usersArr.length; i++) {
        let user = new User(usersArr[i].user_id, usersArr[i].user_nick, usersArr[i].user_score);
        users.push(user);
    }
    return users;
}

module.exports = playerDAO;

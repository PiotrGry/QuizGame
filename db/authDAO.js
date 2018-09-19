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
                    client.query(`SELECT players.*, users.user_password FROM players 
                    JOIN users ON players.player_id = users.user_id 
                    WHERE player_nick='${userNick}';`, (err, result) => {
                        done();

                        if (err) {
                            console.log(err.stack)
                        } else {
                            return resolve(result.rows);
                        }
                    })
                }

            });
        }
    )};

module.exports = authDAO;
let User = require("./models/User");
const pool = require('./db');
const userDao = {};

userDao.findUsers = function(req, res) {

    pool.connect((err, client, done) => {
        if (err) throw err
        client.query('SELECT * FROM players;', (err, result) => {
            done()
            if (err) {
                console.log(err.stack)
            } else {
                res.send(result.rows[0]);
            }
        })
    })
};

module.exports = userDao;
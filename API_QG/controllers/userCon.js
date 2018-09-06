const userDao = require('../db/userDAO');
const userCon = {};

userCon.findUsers = function(req, res) {
    userDao.findUsers().then((result) => {
        res.json(result);
        res.end()
    });
};

userCon.addUser = function(req, res) {
    const userName = req.body.userName;
    userDao.addUser(userName).then((result) => {
        res.json(result);
        res.end();
    })
};

module.exports = userCon;



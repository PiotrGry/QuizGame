const userDao = require('./userDAO');
const userCon = {};

userCon.findUsers = function(req, res) {
    let user = userDao.findUsers().then((result) => {
        res.json(result);
        res.end()
    });
};

module.exports = userCon;

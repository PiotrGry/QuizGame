const authDAO = require('../db/authDAO');
const authCon = {};

authCon.findUser = function(req) {

    const userNick = req.body.userNick;

    authDAO.findUser(userNick).then((result) => {
        res.json(result);
        res.end();
    })
}


module.exports = authCon;
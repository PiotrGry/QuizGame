const playerDao = require('../db/playerDAO');
const playerCon = {};

playerCon.findUsers = function(req, res) {
    playerDao.findUsers().then((result) => {
        res.json(result);
        res.end()
    })
    .catch((err)=>{
        console.log(err)
    });

};

playerCon.addUser = function(req, res) {
    const playerName = req.body.playerName;
    const playerScore = req.body.playerScore;
    playerDao.addUser(playerName,playerScore).then((result) => {
        res.json(result);
        res.end();
    })
};

playerCon.findHighscores = function(req, res) {
    playerDao.findHighscores().then((result) => {
        res.json(result);
        res.end();
    })
};

module.exports = playerCon;



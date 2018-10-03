const Player = require("../models").Player;

module.exports = {
    list(req, res) {
        return Player.findAll()
            .then((players) => res.status(200).send(players))
            .catch((error) => {
                res.status(400).send(error);
            });
    }
};

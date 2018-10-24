const Player = require("../models").Player;

module.exports = {
    list(req, res) {
        return Player.findAll()
            .then((players) => res.status(200).send(players))
            .catch((error) => {
                res.status(400).send(error.message);
            });
    },

    listHighscores(req, res) {
        return Player.findAll({
            order: [
                ['player_score', 'DESC']
            ],
            limit: 5
            }
        ).then((players) => res.status(200).send(players))
            .catch((error) => {
                res.status(400).send(error.message);
            });
    },

    add(req, res) {
        const playerNick= req.body.player_nick;
        const playerScore = req.body.player_score;

        return Player.create({
            player_nick: playerNick, player_score: playerScore
        }
        ).then((player) => {
                res.status(201).send(player)
            })
            .catch(error => {
                res.status(400).send(error.message);
            })
    }
};


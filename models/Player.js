class Player{

    constructor(id, nick, score){
        this._id = id;
        this._nick = nick;
        this._score = score;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get nick() {
        return this._nick;
    }

    set nick(value) {
        this._nick = value;
    }

    get score() {
        return this._score;
    }

    set score(value) {
        this._score = value;
    }
}

class User extends Player {

    constructor(id, nick, score, password) {
        super(id, nick, score);
            this._password = password;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }
}


module.exports = {Player, User};
class User{

    constructor(nick, score){
        this._nick = nick;
        this._score = score;
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
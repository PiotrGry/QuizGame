class Answer {

    constructor(text) {
        this._text = text;
    }

    get text() {
        return this._text;
    }

    set text(value) {
        this._text = value;
    }
}

module.exports = Answer;
class Question {
    constructor(questionId, description, answers, correctAnswer) {
        this._questionId = questionId;
        this._description = description;
        this._answers = answers;
        this._correctAnswer = correctAnswer;
    }

    get questionId() {
        return this._questionId;
    }

    set questionId(value) {
        this._questionId = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    get answers() {
        return this._answers;
    }

    set answers(value) {
        this._answers = value;
    }

    get correctAnswer() {
        return this._correctAnswer;
    }

    set correctAnswer(value) {
        this._correctAnswer = value;
    }
}

module.exports = Question;
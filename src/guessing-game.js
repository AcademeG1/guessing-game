class GuessingGame {
    midPointer = 0;
    constructor() {}

    setRange(min, max) {
        this.minNumber = min;
        this.maxNumber = max;
    }

    guess() {
        this.midPointer = Math.round((this.maxNumber - this.minNumber) / 2) + this.minNumber;
        return this.midPointer;
    }

    lower() {
        this.maxNumber = this.midPointer;
    }

    greater() {
        this.minNumber = this.midPointer;
    }
}

module.exports = GuessingGame;

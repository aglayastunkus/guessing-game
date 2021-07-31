class GuessingGame {
    constructor() {
        this.range = [];
        this.low = 0;
        this.high = 0;
        this.mid = 0;
    }
    setRange(min, max) {
        this.range = Array.from({length: max- min+1}, (v, k) => k);
        this.low = min;
        this.high = max;
    }
    guess() {
        this.mid = Math.round((this.low + this.high) / 2);
        return this.range[this.mid];
    }
    lower() {
        this.high = this.mid;
    }
    greater() {
        this.low = this.mid;
    }
}
module.exports = GuessingGame;

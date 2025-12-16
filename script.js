BigUint64Array.prototype[Symbol.iterator] = function* () {
    for (let i = 0; i < this.length; i++) {
        yield this[i];
    }
};
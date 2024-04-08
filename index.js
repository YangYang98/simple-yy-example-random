function random(min, max) {
    return Math.round(Math.random() * (max - min + 1)) + min;
}

module.exports = random;
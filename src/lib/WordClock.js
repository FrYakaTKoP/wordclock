"use strict";

const TimePropagationStrategy = require('./TimePropagationStrategy');

class WordClock {

    constructor(config) {
        this.config = config;
    }

    withTimePropagation(timePropagationStrategy) {
        this.timePropagationStrategy = timePropagationStrategy || new TimePropagationStrategy();
    }

    getTime() {
        return new Date().getTime();
    }

    tick() {
        this.timePropagationStrategy.execute(this.getTime());
    }

}

module.exports = WordClock;
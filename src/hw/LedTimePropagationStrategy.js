'use strict';

const TimePropagationStrategy = require('../lib/TimePropagationStrategy');

class LedTimePropagationStrategy extends TimePropagationStrategy {
    constructor() {
        super();
    }
    propagator(time) {
        this.render(time);
    }
    render(time) {
        // TODO render stuff on LED matrix
        console.log(new Date(time));
    }
}

module.exports = LedTimePropagationStrategy;
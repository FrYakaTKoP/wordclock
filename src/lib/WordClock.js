"use strict";

const TimeSource = require('./TimeSource');
const Output = require('./Output');
const Events = require('./Events');

class WordClock {

    constructor(config) {
        this.config = config;
        this.timeSource = config.timeSource || new TimeSource();
        this.output = config.output || new Output();
        this.events = config.events || new Events({
            subscriptions: {
                tick: this.tick
            }
        });
    }

    tick() {
        let time = this.timeSource.getTime();
        this.output.render(time);
    }

}

module.exports = WordClock;
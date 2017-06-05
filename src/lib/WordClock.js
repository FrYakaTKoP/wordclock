"use strict";

const TimeSource = require('./TimeSource');
const Output = require('./Output');
const Events = require('./Events');

class WordClock {

    constructor(config) {
        this.config = config;
        this.timeSource = new config.timeSource() || new TimeSource();
        this.output = new config.output() || new Output();
        this.events = new Events({
            subscriptions: {
                clock: this.clockHandler.bind(this)
            }
        });
    }

    tick() {
        let time = this.timeSource.getTime();
        this.output.render(time);
    }

    clockHandler(msg) {
        let action = msg.payload ? this[msg.payload.action] : undefined;
        if (action) action.call(this, msg.payload);
    }

}

module.exports = WordClock;
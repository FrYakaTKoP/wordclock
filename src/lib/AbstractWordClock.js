"use strict";

const TimeSource = require('./TimeSource');
const Output = require('./Output');
const Events = require('./Events');

class AbstractWordClock {

    constructor(config) {
        this.config = config || {};
        this.timeSource = config.timeSource ? new config.timeSource() : new TimeSource();
        this.output = config.output ? new config.output() : new Output();
        this.events = new Events({
            subscriptions: this.subscriptions()
        });

    }

    subscriptions() {
        return {
            clock: this.handler.bind(this)
        };
    }

    tick(data) {
        this.output.showTime(data.time);
    }

    updateTemperature(temp) {
        this.output.showTemperature(temp);
    }

    handler(msg) {
        let action = msg.payload ? this[msg.payload.action] : undefined;
        if (action) action.call(this, msg.payload);
    }

}

module.exports = AbstractWordClock;
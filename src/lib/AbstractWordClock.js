"use strict";

const TimeSource = require('./TimeSource');
const Output = require('./Output');
const Events = require('./Events');

class AbstractWordClock {

    constructor(config) {
        this.config = config || {};
        this.timeSource = new config.timeSource() || new TimeSource();
        this.output = new config.output() || new Output();
        this.events = new Events({
            subscriptions: this.subscriptions()
        });
        this.interval = this.startTicking();
    }

    subscriptions() {
        return {
            clock: this.handler.bind(this)
        };
    }

    tick() {
        let time = this.timeSource.getTime();
        this.output.render(time);
    }

    startTicking() {
        return setInterval(() => {
            this.events.tick();
        }, this.config.updateInterval || 1000);
    }

    handler(msg) {
        let action = msg.payload ? this[msg.payload.action] : undefined;
        if (action) action.call(this, msg.payload);
    }

}

module.exports = AbstractWordClock;
"use strict";

const AbstractWordClock = require('../lib/AbstractWordClock');
const LedOutput = require('./LedOutput');

class WordClock extends AbstractWordClock {

    constructor(config) {
        super({
            output: LedOutput,
            updateInterval: config.updateInterval
        });
        this.interval = this.startTicking();
    }

    startTicking() {
        return setInterval(() => {
            this.events.tick(this.timeSource.getTime());
        }, this.config.updateInterval || 1000);
    }

}

module.exports = WordClock;
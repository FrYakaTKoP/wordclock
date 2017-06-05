"use strict";

const AbstractWordClock = require('../lib/AbstractWordClock');
const RtcTimeSource = require('./RtcTimeSource');
const LedOutput = require('./LedOutput');

class WordClock extends AbstractWordClock {

    constructor(config) {
        super({
            timeSource: RtcTimeSource,
            output: LedOutput,
            updateInterval: config.updateInterval
        });
    }

}

module.exports = WordClock;
"use strict";

const TimeSource = require('../lib/TimeSource');

class RtcTimeSource extends TimeSource {

    constructor(config) {
        super(config);
    }

    getTime() {
        // TODO get time from real time clock
        return new Date().getTime();
    }

}

module.exports = RtcTimeSource;
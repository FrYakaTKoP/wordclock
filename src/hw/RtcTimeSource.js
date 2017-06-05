"use strict";

const TimeSource = require('../lib/TimeSource');

class RtcTimeSource extends TimeSource {

    constructor(config) {
        super(config);
    }

    getTime() {
        return new Date().getTime();
    }

}

module.exports = RtcTimeSource;
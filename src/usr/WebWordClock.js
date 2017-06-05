"use strict";

const AbstractWordClock = require('../lib/AbstractWordClock');

class WebWordClock extends AbstractWordClock {

    constructor(config) {
        super(config);
        setTimeout(() => {
            this.events.loremIpsum();
        }, 5000);
    }

}

module.exports = WebWordClock;
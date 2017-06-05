"use strict";

class TimeSource {

    constructor(config) {
        this.config = config;
    }

    getTime() {
        return new Date().getTime();
    }

}

module.exports = TimeSource;
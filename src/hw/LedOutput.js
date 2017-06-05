"use strict";

const Output = require('../lib/Output');

class LedOutput extends Output {

    constructor(config) {
        super(config);
    }

    render(data) {
        // TODO render time on led matrix
        return console.log(new Date(data));
    }

}

module.exports = LedOutput;
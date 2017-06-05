"use strict";

const Output = require('../lib/Output');

class LedOutput extends Output {

    constructor(config) {
        super(config);
    }

    render(data) {
        return console.log(data);
    }

}

module.exports = LedOutput;
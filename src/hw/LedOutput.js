"use strict";

const Output = require('../lib/Output');

class LedOutput extends Output {

    constructor(config) {
        super(config);
    }

    /**
     * Render led matrix
     * @param {Array} matrix 
     */
    render(matrix) {
        return console.log(matrix);
    }

    /**
     * 
     * @param {Timestamp} data 
     */
    showTime(time) {
        // TODO render time on led matrix
        return this.render(new Date(time));
    }

}

module.exports = LedOutput;
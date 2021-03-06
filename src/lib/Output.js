"use strict";

class Output {

    constructor(config) {
        this.config = config;
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
        return this.render(new Date(time));
    }

    updateTemperature(temp) {
        console.log('temperature updated: ' + temp);
    }
}

module.exports = Output;
"use strict";
const ws281x = require('rpi-ws281x-native');
const Output = require('../lib/Output');

class LedOutput extends Output {

    constructor(config) {
        super(config);
        this.NUM_LEDS = parseInt(process.argv[2], 10) || 136,
            this.pixelData = new Uint32Array(this.NUM_LEDS),
            this.offset = 0;
        ws281x.init(this.NUM_LEDS);
    }

    /**
     * Render led matrix
     * @param {Array} matrix 
     */
    render(matrix) {
        let i = this.NUM_LEDS;
        while (i--) {
            this.pixelData[i] = 0;
        }
        this.pixelData[this.offset] = 0xffffff;

        this.offset = (this.offset + 1) % this.NUM_LEDS;
        ws281x.render(this.pixelData);
        return console.log(matrix);
    }

    /**
     * 
     * @param {Timestamp} data 
     */
    showTime(time) {
        // TODO generate matrix to render
        let matrix = [];
        return this.render(matrix);
    }

    showTemperature(temp) {
        // do something with the temperature...
        console.log('Temperature: ' + temp);
    }

    reset() {
        ws281x.reset();
    }
}

module.exports = LedOutput;
"use strict";

const AbstractWordClock = require('../lib/AbstractWordClock');
const LedOutput = require('./LedOutput');
const GpioHandler = require('./GpioHandler');
const TempSensor = require('./TempSensor');

class WordClock extends AbstractWordClock {

    constructor(config) {
        super({
            output: LedOutput,
            updateInterval: config.updateInterval || 1000,
            temperatureUpdateInterval: config.temperatureUpdateInterval || 10000
        });

        // init hardware
        this.gpio = new GpioHandler();
        this.tempSensor = new TempSensor();

        // run updates
        this.clockUpdateInterval = this.startTicking();
        this.temperatureUpdateInterval = this.readTemperature();

        // handle SIGINT
        //handleSIGINT();
		process.on('SIGINT', function() {
            this.output.reset();
            this.gpio.destroy();
            process.nextTick(function() { process.exit(0); });
        });
        console.log('Press <ctrl>+C to exit.');
    }

    loremIpsum() {
        this.output.render("lorem ipsum");
    }

    startTicking() {
        return setInterval(() => {
            this.events.tick(this.timeSource.getTime());
        }, this.config.updateInterval);
    }

    readTemperature() {
        return setInterval(() => {
            this.events.updateTemperature(this.tempSensor.getTemperature());
        }, this.config.temperatureUpdateInterval);
    }


    handleSIGINT() {

    }

}

module.exports = WordClock;
'use strict';

const gpio = require('rpi-gpio');

class GpioHandler {

    constructor() {
        this.handle();
    }

    handle() {
        gpio.on('change', function(channel, value) {
            console.log('Channel ' + channel + ' value is now ' + value);
        });
        gpio.setMode('mode_bcm');
        gpio.setup(21, gpio.DIR_IN, gpio.EDGE_BOTH);
    }

    destroy() {
        gpio.destroy();
    }

}

module.exports = GpioHandler;
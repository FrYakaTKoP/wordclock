'use strict';

const sensor = require('ds18x20');

class TempSensor {

    constructor() {
        // this.isLoaded = sensor.isDriverLoaded();
        // console.log('Sensor driver loaded: ' + this.isLoaded);
        //var listOfDeviceIds = sensor.list();
        //console.log(listOfDeviceIds);
    }

    getTemperature() {
        return sensor.getAll()[0];
    }

}

module.exports = TempSensor;
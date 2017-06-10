'use strict'
const WordClock = require('./WordClock');

let clock = new WordClock({
    updateInterval: 2000,
    temperatureUpdateInterval: 10000
});
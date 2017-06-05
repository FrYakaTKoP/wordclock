'use strict'
const WordClock = require('../lib/WordClock');
const RtcTimeSource = require('./RtcTimeSource');
const LedOutput = require('./LedOutput');

let clock = new WordClock({
    timeSource: new RtcTimeSource(),
    output: new LedOutput()
});

setInterval(() => {
    clock.events.tick({
        time: new Date().getTime()
    });
}, 1000);
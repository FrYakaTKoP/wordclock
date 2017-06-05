'use strict'
const WordClock = require('../lib/WordClock');
const RtcTimeSource = require('./RtcTimeSource');
const LedOutput = require('./LedOutput');

let clock = new WordClock({
    timeSource: RtcTimeSource,
    output: LedOutput
});

setInterval(() => {
    clock.events.tick();
}, 1000);
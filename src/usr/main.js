'use strict'
const WebSocketWordClock = require('./WebSocketWordClock');
let clock = new WebSocketWordClock({});
setInterval(() => {
    clock.tick();
}, 1000);
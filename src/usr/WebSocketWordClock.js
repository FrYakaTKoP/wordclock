'use strict'
const index = require('slimple-ws');
const WebSocketClient = index.WebSocketClient;
const WordClock = require('../lib/WordClock');
const WebSocketTimePropagationStrategy = require('./WebSocketTimePropagationStrategy');

class WebSocketWordClock extends WordClock {
    constructor(config) {
        super(config);
        this.withTimePropagation(new WebSocketTimePropagationStrategy(this.wsc));
    }
}

module.exports = WebSocketWordClock;
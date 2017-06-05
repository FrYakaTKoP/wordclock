'use strict'
const index = require('slimple-ws');
const WebSocketClient = index.WebSocketClient;
const WordClock = require('../lib/WordClock');
const WebSocketTimePropagationStrategy = require('./WebSocketTimePropagationStrategy');

class WebSocketWordClock extends WordClock {
    constructor(config) {
        super(config);
        this.wsc = new WebSocketClient('ws://localhost:9090/', {
            subscriptions: {
                clock: () => {}
            }
        }).run();
        this.withTimePropagation(new WebSocketTimePropagationStrategy(this.wsc));
    }
}

module.exports = WebSocketWordClock;
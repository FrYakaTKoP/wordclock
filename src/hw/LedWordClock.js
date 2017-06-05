'use strict'

const index = require('slimple-ws');
const WebSocketClient = index.WebSocketClient;
const Message = index.Message;

const WordClock = require('../lib/WordClock');
const LedTimePropagationStrategy = require('./LedTimePropagationStrategy');

class LedWordClock extends WordClock {

    constructor(config) {
        super(config);
        this.withTimePropagation(new LedTimePropagationStrategy());
        this.wsc = new WebSocketClient('ws://localhost:9090/', {
            subscriptions: {
                clock: this.clockHandler.bind(this)
            }
        }).run();
    }

    tick(data) {
        this.time = data.time;
        super.tick();
    }

    getTime() {
        return this.time;
    }

    clockHandler(msg) {
        let action = msg.payload ? this[msg.payload.action] : undefined;
        if (action) action.call(this, msg.payload);
    }

}

module.exports = LedWordClock;
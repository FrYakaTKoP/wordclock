'use strict';

const index = require('slimple-ws');
const Message = index.Message;
const TimePropagationStrategy = require('../lib/TimePropagationStrategy');

class WebSocketTimePropagationStrategy extends TimePropagationStrategy {
    constructor(wsc) {
        super();
        this.wsc = wsc;
    }
    propagator(time) {
        if (!this.wsc.connection) return;
        this.wsc.send(new Message({
            event: 'broadcast',
            channel: 'clock',
            payload: {
                action: 'tick',
                time: time
            }
        }));
    }
}

module.exports = WebSocketTimePropagationStrategy;
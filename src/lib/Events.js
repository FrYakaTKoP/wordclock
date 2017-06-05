"use strict";

const index = require('slimple-ws');
const WebSocketClient = index.WebSocketClient;
const Message = index.Message;

class Events {

    constructor(config) {
        this.config = config;
        this.channel = 'clock';
        this.wsc = new WebSocketClient('ws://localhost:9090', config);
        this.wsc.run();
    }

    tick() {
        this.trigger({
            action: 'tick'
        });
    }

    trigger(payload) {
        if (!this.wsc.connection) return;
        this.wsc.send(new Message({
            event: 'broadcast',
            channel: this.channel,
            payload: payload
        }));
    }

}

module.exports = Events;
'use strict'
const index = require('slimple-ws');
const EVENTS = index.EVENTS;
const Message = index.Message;

const wss = new index.WebSocketServer({
    port: 9090
});
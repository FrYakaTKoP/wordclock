'use strict'

const server = require('slimple');
const storage = require('node-persist');
const serverConfig = require('../../config/server.js');
const WordClock = require('./lib/WordClock.js');

storage.initSync();

let ctx = server.run(serverConfig, {
    storage: storage,
    clock: new WordClock()
});
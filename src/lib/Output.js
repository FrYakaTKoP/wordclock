"use strict";

class Output {

    constructor(config) {
        this.config = config;
    }

    render(data) {
        return console.log(data);
    }

}

module.exports = Output;
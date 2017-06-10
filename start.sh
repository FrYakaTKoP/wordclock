#!/bin/bash

#handy start of wordclock for tests
sh -c 'node src/broker/main.js & sudo node src/hw/main.js & wait'
# Press Ctrl+C to Exit
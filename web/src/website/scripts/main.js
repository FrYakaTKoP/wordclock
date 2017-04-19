"use strict";

import $ from 'jquery';
import App from './core/App';
import ClockApi from './stores/ClockApi';

$(() => {
    new App()
        .withDataStore(new ClockApi())
        .run($('body'));
});
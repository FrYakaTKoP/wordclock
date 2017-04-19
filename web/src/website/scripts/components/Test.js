import $ from 'jquery';
import Component from '../core/Component';

export default class Test extends Component {

    constructor(ctx, node) {
        super(ctx, node);
        this.clock = ctx.getStore('ClockApi');
    }

    init() {
        this.render();
    }

    subscribe() {
        this.node.delegate('button', 'click', this.test.bind(this));
        this.clock.on('test', this.onTest.bind(this)); 
    }

    test(event) {
        event.preventDefault();
        this.clock.test();
    }
    onTest(data) {
        alert('test executed: ' + JSON.stringify(data));
    }
}
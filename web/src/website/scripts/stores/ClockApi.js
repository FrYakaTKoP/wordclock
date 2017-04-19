import RestStore from '../core/store/RestStore';

export default class ClockApi extends RestStore {
    constructor() {
        super('/clock/api');
    }
    test() {
        return this.call('POST', {
            action: 'test',
            params: {
                text: 'hello world'   
            }
        });
    }
}
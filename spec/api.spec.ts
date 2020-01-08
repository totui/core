
import * as api from '../src/api';

describe('Public API', () => {
    describe('interfaces', () => {
        // Interfaces has no actual runtime representation so they
        // cannot really be tested with expects, however if they are 
        // not present on API, then ts-node should complain and fail.

        it('IDictionary', () => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            let type: api.IDictionary = null;
        });

        it('IDictionary with generic', () => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            let type: api.IDictionary<string> = null;
        });
    });
});

const expect = require('chai').expect
const server = require('../index');

describe('test', () => {
    it('should return a string', () => {
        expect('Hello Covert-Comms!').to.equal('Hello Covert-Comms!');
    });
});
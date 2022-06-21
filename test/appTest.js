const assert = require("chai").assert;
const { describe } = require("mocha");
const app = require("../app");

describe('App', function() {
    it('Should return Hello when program is run', () => {
        assert.equal(app(), 'hello')
    })
})

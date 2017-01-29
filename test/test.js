var expect = require("chai").expect;
var request = require("request-mocha");

describe('homepage', function() {

    var url = "http://localhost:5000";

    it('returns status 200', function() {
        request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
        });
    });
});

var expect = require("chai").expect;
var request = require("request-mocha");

describe('homepage', function() {

    var url = "http://localhost:5000";

    it('returns status 200', function() {
        request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
        });
    });

    describe('news section', function() {

        it('is labeled with League News', function() {
            // We want the news section to be properly labelled

            var news = document.getElementsByClassName('news');

            request(url, function(error, response, body) {
                expect($('.news').html()).to.equal('League News');
            });
        });
    });
});

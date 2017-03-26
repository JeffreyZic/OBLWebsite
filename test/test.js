var expect = require("chai").expect;
var request = require("request-mocha");
var jsdom = require('mocha-jsdom');

describe('homepage', function() {

    var url = "http://localhost:5000";

    it('returns status 200', function() {
        request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
        });
    });

    describe('news section', function() {

        jsdom()

        it('is labeled with League News', function() {
            // We want the news section to be properly labelled

            var news = document.getElementsByClassName('news');

            request(url, function(error, response, body) {
                expect($('.news').html()).to.equal('League News');
            });
        });

       /* describe('getNews', function() {
            //testing function that grabs news items from db

            it('generates the proper select query when fetching news', function() {
                var date = '20170101',
                    subject = 'news title',
                    author = 'john doe',
                    text = 'this is a news article';
                var results = [{ id: 0, date: date, subject: subject, author: author, text: text }]
                var fields = ['id', 'date', 'subject', 'author', 'text'];
                var expectation = mysqlMock.expects('query')
                    .withArgs('select * from news where date', [ date ])
                    .callsArgsWith(2, null, results, fields);

                return newsItems.getNewsByDate(date).should.eventually.become(results[0]);
            });

        });*/
    });
});

describe('database', function() {

    var url = "http://localhost:5000";

    it('says when connection is successful', function() {
        expect(dbconnect().to.equal('The database connection was successful'));
    });

    it ('says when connection fails', function() {
        expect(dbconnect().to.equal('Failed to sucessfully connect to dataabse'));
    });

    it('checks if table exists', function() {

    });
}

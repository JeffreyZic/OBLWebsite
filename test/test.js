var request = require('supertest');
var app = require('../app.js');

describe('GET /', function() {
    it('responds with welcome message', function(done) {
        request(app).get('/').expect('Welcome to the OBL! This is a test change! again', done);
    });
});

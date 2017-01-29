var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send('Welcome to the OBL! This is a test change!');
});

app.listen(process.env.PORT || 5000);

module.exports = app;

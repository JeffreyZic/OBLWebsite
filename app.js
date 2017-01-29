var express = require('express');

var app = express();

app.use(express.static(__dirname + '/View'));
app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/style'));

app.get('/', function (req, res) {
    res.sendFile('/index.html');
});

app.listen(process.env.PORT || 5000);

module.exports = app;

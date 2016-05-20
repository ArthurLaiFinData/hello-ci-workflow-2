
// index.js
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  //res.send('Hello, Arthur!');
  //res.send('this is Express ~');  

  var date = new Date();
  //var current_hour = date.getHours();
  var current_hour = Date.now();

  res.send('Hello, Arthur! <br>' + current_hour);
});

var server = app.listen(3080, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});


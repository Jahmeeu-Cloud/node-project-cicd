var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello Horla! You are getting there, working as a Professional Cloud DevOps Engineer');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

fs = require('fs')
fs.readFile('index.html', 'utf8', function(err,data) {
  if(err){
   response.send(err);
}
  response.write(data);
  response.end();
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

// express framework 

// load required custom modules
var calc = require('../components/calc.js');

// load required npm modules
var express = require('express');
var app = express();

 
// setup cross orgin scripting, not for production
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// setup static content
app.use(express.static('../static'));
 
// app router
app.get('/', function (req, res) {
  
    var performCalc = calc.add(2,2,0,1);
    res.send(`Calc ${performCalc}`);
  
});

// setup server
var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address ().port
   
    console.log("Server running", host, port);
   
  })




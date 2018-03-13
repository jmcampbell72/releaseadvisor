// express framework 

// load required custom modules
var calc = require('../components/calc.js');

// load required npm modules
var express = require('express');
var hbs = require('hbs');
var app = express();


// object declare 

var site = {
  "site":"Release Advisor",
  "www":"www.rel.com"
}
// setup template engine object 
app.set('view engine', 'hbs');

// setup cross orgin scripting, not for production
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// setup static content
app.use(express.static('../static'));
 
// app router
app.get('/', (req, res) => {
    res.render('../views/home.hbs', {
        performCalc: calc.add(2,2,0,10),
        navTitle: site.site,
        www: site.www
    });
});

app.get('/release', (req, res) => {
  res.send('testxxx')
  });

// setup server
var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address ().port
   
    console.log("Server running", host, port);
   
  })


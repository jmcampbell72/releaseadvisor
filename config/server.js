// express framework 

// load required custom modules
var calc = require('../components/calc.js');
// var release = require('../components/release.js');

// load required npm modules
var express = require('express');
var bodyParser = require('body-parser');
var hbs = require('hbs');
var app = express();


// object declare 

var site = {
  "site":"Release Robo Advisor",
}

var releaseTeams = { 
  rteama: "Target",
  rteamb: "Lion",
  rteamc: "Tiger",
  rteamd: "Shark",
  rteame: "Batman",
  rteamf: "Band"
}

var businessunits = { 
  "biza": "Commerical Investment Bank",
  "bizb": "Asset Management",
  "bizc": "Group I.T",
  "bizd": "Private Wealth Management",
  "bize": "Retail Bank",
  "bizf": "Global"
}

var counters = {
  failureTech: 3,
  myReleaseScore: 4
}

// setup static content
app.use('/static', express.static('./static'));

// register partials location
hbs.registerPartials('./views/partials');

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
  navTitle: site.site,
  failureTech: counters.failureTech,
  myReleaseScore: counters.myReleaseScore
  });
});

app.get('/release', (req, res) => {
  res.render('../views/release.hbs', {
  navTitle: site.site, 
  biza: businessunits.biza,
  bizb: businessunits.bizb,
  bizc: businessunits.bizc,
  bizd: businessunits.bizd,
  bize: businessunits.bize,
  bizf: businessunits.bizf,
  failureTech: counters.failureTech,
  myReleaseScore: counters.myReleaseScore,
  rteama: releaseTeams.rteama,
  rteamb: releaseTeams.rteamb,
  rteamc: releaseTeams.rteamc,
  rteamd: releaseTeams.rteamd,
  rteame: releaseTeams.rteame,
  rteamf: releaseTeams.rteamf 
  });
});

app.get('/releasetechnology', (req, res) => {
  res.send('releasetechnology');
});

app.get('/releasescores', (req, res) => {
  res.send('release scores called');
});

app.get('/about', (req, res) => {
  res.send('about called');
});

app.use(bodyParser.json());

app.post('/askrelease', (req, res) => {
  

  var businessUnit = parseInt(req.body.businessunit);
  var changePriority = parseInt(req.body.changepriority);
  var changeScope = parseInt(req.body.changescope);
  var changeType = parseInt(req.body.changetype);
  var infrPlatform = parseInt(req.body.infrplatform);
  var appName = req.body.appname;
  
  var releaseCalc = (businessUnit + changePriority + changeType + infrPlatform) * changeScope;
  
  console.log(req.body);

  res.send({releaseCalc});  
  res.status(200);
  console.log(releaseCalc);
 
})
// app.get('/askrelease', (req, res) => {
//   res.send('api called');
// });
// setup server
var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address ().port
   
    console.log("Server running", host, port);
   
  })


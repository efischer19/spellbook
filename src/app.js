var express = require('express');
var app = express();

//static locations
app.use(express.static('views'));
app.use(express.static('src'));
app.use(express.static('lib'));

//address and port selection
var setupDetails = require('./server_init.js');
var deploymentHostname = 'droor-pi';
var deploymentPort = 80;
var developmentPort = 8080;
var serverIP = setupDetails.getAddress(deploymentHostname);
var serverPort = setupDetails.getPort(deploymentPort, developmentPort, deploymentHostname);


app.get('/', function (req, res) {
  res.render('../views/index');
});

app.get('/card_demo', function (req, res) {
  var opts = {root:process.cwd()+'/views/'};
  res.sendFile('card.html', opts);
});

var server = app.listen(serverPort, serverIP, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Spellbook running at http://%s:%s', host, port);
});
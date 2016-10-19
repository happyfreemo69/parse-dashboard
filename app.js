var reqLogger = require('nodelibs/')['Mdw/reqLogger'];
var config = require('./config');
var express = require('express');
var ParseDashboard = require('parse-dashboard');

var dashboard = new ParseDashboard({
  "apps": ['dev', 'uat', 'prd'].map(function(x){
    return {
      "serverURL": config[x+'_url'],
      "appId": config.[x+'_appId'],
      "masterKey": config[x+'_masterKey'],
      "appName": x
    }
  })
});

var app = express();

app.use(reqLogger(config));
app.get('/ping', function(req,res){
    return res.status(200).end();
})
// make the Parse Dashboard available at /dashboard
app.use('/dashboard', dashboard);

var httpServer = require('http').createServer(app);

if(config.https){
    var fs = require('fs');
    var privateKey = fs.readFileSync(__dirname+'/config/server.key');
    var certificate = fs.readFileSync(__dirname+'/config/server.crt');

    var credentials = {key: privateKey, cert: certificate};
    var httpsServer = require('https').createServer(credentials, app);
    httpsServer.listen(config.httpsPort, function(){
        console.info('https on '+config.httpsPort);
    });
}
app.listen(config.httpPort, function() {
  console.info('http on '+config.httpPort);
});
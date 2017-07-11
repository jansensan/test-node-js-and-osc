'use strict';

module.exports = function(app) {
  var oscApi = require('./osc-api')();

  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

  app.get('/', getHome);
  app.get('/max/send-value-1', oscApi.sendMaxValue1);
  app.get('/max/send-value-2', oscApi.sendMaxValue2);
  app.get('/max/send-value-3', oscApi.sendMaxValue3);
  app.get('/max/send-value-4', oscApi.sendMaxValue4);
  app.get('/pde/send-value-1', oscApi.sendProcessingValue1);
  app.get('/pde/send-value-2', oscApi.sendProcessingValue2);

  // methods definitions
  function getHome(request, response) {
    response.send('<h1>Node OSC services</h1>');
  }
};

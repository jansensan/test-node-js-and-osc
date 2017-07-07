'use strict';

module.exports = function(app) {
  var oscApi = require('./osc-api')();

  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

  app.get('/', getHome);
  app.get('/osc/send-value-1', sendValue1);
  app.get('/osc/send-value-2', sendValue2);
  app.get('/osc/send-value-3', sendValue3);
  app.get('/osc/send-value-4', sendValue4);

  // methods definitions
  function getHome(request, response) {
    response.send('<h1>Node OSC services</h1>');
  }

  function sendValue1(request, response) {
    oscApi.sendValue1();
    response.send('Value 1 sent.');
  }

  function sendValue2(request, response) {
    oscApi.sendValue2();
    response.send('Value 2 sent.');
  }

  function sendValue3(request, response) {
    oscApi.sendValue3();
    response.send('Value 3 sent.');
  }

  function sendValue4(request, response) {
    oscApi.sendValue4();
    response.send('Value 4 sent.');
  }
};

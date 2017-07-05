'use strict';

module.exports = function(app) {
  var oscServices = require('./osc-services')();

  app.get('/', getHome);
  app.post('/osc/send-value-1', sendValue1);
  app.post('/osc/send-value-2', sendValue2);

  // methods definitions
  function getHome(request, response) {
    response.send('<h1>Node OSC services</h1>');
  }

  function sendValue1(request, response) {
    oscServices.sendValue1();
    response.send('Value 1 sent.');
  }

  function sendValue2(request, response) {
    oscServices.sendValue2();
    response.send('Value 2 sent.');
  }
};

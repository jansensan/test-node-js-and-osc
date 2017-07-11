require('dotenv').config();


var osc = require('osc');
var Signal = require('signals');


module.exports = function() {
  // consts
  var Local = {
    ADDRESS: process.env.LOCAL_ADDRESS,
    PORT: process.env.LOCAL_PORT
  };
  var Max = {
    ADDRESS: process.env.MAX_ADDRESS,
    PORT: process.env.MAX_PORT
  };
  var Processing = {
    ADDRESS: process.env.PROCESSING_ADDRESS,
    PORT: process.env.PROCESSING_PORT
  };


  // vars
  var _udpPort = null;
  var _portOpened = new Signal();
  var _isPortOpen = false;


  // public api
  return {
    // max methods
    sendMaxValue1: sendMaxValue1,
    sendMaxValue2: sendMaxValue2,
    sendMaxValue3: sendMaxValue3,
    sendMaxValue4: sendMaxValue4,
    // processing methods methods
    sendProcessingValue1: sendProcessingValue1,
    sendProcessingValue2: sendProcessingValue2,
  };


  // methods definitions
  function sendMaxValue1(request, response) {
    sendValue(
      Max,
      '/1',
      [
        {
          type: 'i',
          value: 110
        }
      ]
    );
    response.send('Value 1 sent to Max.');
  }

  function sendMaxValue2(request, response) {
    sendValue(
      Max,
      '/2',
      [
        {
          type: 'i',
          value: 220
        }
      ]
    );
    response.send('Value 2 sent to Max.');
  }

  function sendMaxValue3(request, response) {
    sendValue(
      Max,
      '/3',
      [
        {
          type: 'i',
          value: 440
        }
      ]
    );
    response.send('Value 3 sent to Max.');
  }

  function sendMaxValue4(request, response) {
    sendValue(
      Max,
      '/4',
      [
        {
          type: 'i',
          value: 880
        }
      ]
    );
    response.send('Value 4 sent to Max.');
  }

  function sendProcessingValue1(request, response) {
    sendValue(
      Processing,
      '/pde',
      [
        {
          type: 'i',
          value: 256
        }
      ]
    );
    response.send('Value 1 sent to Processing.');
  }

  function sendProcessingValue2(request, response) {
    sendValue(
      Processing,
      '/pde',
      [
        {
          type: 'i',
          value: 512
        }
      ]
    );
    response.send('Value 2 sent to Processing.');
  }

  // private methods definitions
  function openPort() {
    // exit quickly if port is already opened
    if (_isPortOpen) {
      _portOpened.dispatch();
      return;
    }

    // create an osc.js UDP port listener
    _udpPort = new osc.UDPPort({
      localAddress: Local.ADDRESS,
      localPort: Local.PORT,
      metadata: true
    });
    // TODO: check if listening really necessary at this time

    // open socket
    _udpPort.open();

    // wait for "ready" event
    _udpPort.on('ready', onPortOpened);
    _udpPort.on('error', onPortFailed);
  }

  function onPortOpened() {
    _isPortOpen = true;
    _portOpened.dispatch();
  }

  function onPortFailed(error) {
    console.log(error);
  }

  function sendValue(device, oscAddress, oscData) {
    _portOpened.removeAll();
    _portOpened.add(function() {
      // send OSC message
      _udpPort.send(
        {
          address: oscAddress,
          args: oscData
        },
        device.ADDRESS,
        device.PORT
      );
    });
    openPort();
  }

};

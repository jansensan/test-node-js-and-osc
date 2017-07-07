require('dotenv').config();


var osc = require('osc');
var Signal = require('signals');


module.exports = function() {
  // consts
  var Local = {
    ADDRESS: process.env.LOCAL_ADDRESS,
    PORT: process.env.LOCAL_PORT
  };
  var Remote = {
    ADDRESS: process.env.REMOTE_ADDRESS,
    PORT: process.env.REMOTE_PORT
  }


  // vars
  var _udpPort = null;
  var _portOpened = new Signal();
  var _isPortOpen = false;


  // public api
  return {
    sendValue1: sendValue1,
    sendValue2: sendValue2,
    sendValue3: sendValue3,
    sendValue4: sendValue4,
  };


  // methods definitions
  function sendValue1(req, res) {
    sendValue(
      '/1',
      [
        {
          type: 'i',
          value: 110
        }
      ]
    );
  }

  function sendValue2(req, res) {
    sendValue(
      '/2',
      [
        {
          type: 'i',
          value: 220
        }
      ]
    );
  }

  function sendValue3(req, res) {
    sendValue(
      '/3',
      [
        {
          type: 'i',
          value: 440
        }
      ]
    );
  }

  function sendValue4(req, res) {
    sendValue(
      '/4',
      [
        {
          type: 'i',
          value: 880
        }
      ]
    );
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

  function sendValue(oscAddress, oscData) {
    _portOpened.removeAll();
    _portOpened.add(function() {
      // send OSC message
      _udpPort.send(
        {
          address: oscAddress,
          args: oscData
        },
        Remote.ADDRESS,
        Remote.PORT
      );
    });
    openPort();
  }

};

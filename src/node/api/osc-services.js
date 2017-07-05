require('dotenv').config();

var osc = require('osc');


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

  // public api
  return {
    sendValue1: sendValue1,
    sendValue2: sendValue2,
  };


  // methods definitions
  function sendValue1(req, res) {
    sendValue(
      '/1', 
      [
        {
          type: 'f',
          value: 440
        }
      ]
    );
  }

  function sendValue2(req, res) {
    sendValue(
      '/2', 
      [
        {
          type: 'f',
          value: 880
        }
      ]
    );
  }

  // private methods definitions
  function sendValue(oscAddress, oscData) {
    // Create an osc.js UDP Port listening on port 57121.
    // TODO: check if listening really necessary at this time
    var udpPort = new osc.UDPPort({
      localAddress: Local.ADDRESS,
      localPort: Local.PORT,
      metadata: true
    });

    // Open the socket.
    udpPort.open();

    // Sending OSC messages:
    // For most Ports, send() should only be called after the "ready" event fires.
    udpPort.on('ready', function onWSSPortReady() {
      udpPort.send(
        {
          address: oscAddress,
          args: oscData
        },
        Remote.ADDRESS,
        Remote.PORT
      );
    });
  }

};

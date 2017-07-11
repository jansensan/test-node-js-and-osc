// public api
let OSCService = {
  // max methods
  sendMaxValue1: sendMaxValue1,
  sendMaxValue2: sendMaxValue2,
  sendMaxValue3: sendMaxValue3,
  sendMaxValue4: sendMaxValue4,
  // processing methods
  sendProcessingValue1: sendProcessingValue1,
  sendProcessingValue2: sendProcessingValue2,
};
export default OSCService;


// vars
const DOMAIN = 'localhost';
const PORT = 3000;
const BASE_URL = 'http://' + DOMAIN + ':' + PORT + '/';

// methods definitions
function sendMaxValue1() {
  sendRequest('max/send-value-1');
}

function sendMaxValue2() {
  sendRequest('max/send-value-2');
}

function sendMaxValue3() {
  sendRequest('max/send-value-3');
}

function sendMaxValue4() {
  sendRequest('max/send-value-4');
}

function sendProcessingValue1() {
  sendRequest('pde/send-value-1');
}

function sendProcessingValue2() {
  sendRequest('pde/send-value-2');
}


// private methods definitions
function sendRequest(endpointUrl) {
  var request = new XMLHttpRequest();
  request.open('GET', BASE_URL + endpointUrl);
  request.send();
}

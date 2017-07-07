// public api
let OSCService = {
  sendValue1: sendValue1,
  sendValue2: sendValue2,
  sendValue3: sendValue3,
  sendValue4: sendValue4,
};
export default OSCService;


// vars
const DOMAIN = 'localhost';
const PORT = 3000;
const BASE_URL = 'http://' + DOMAIN + ':' + PORT + '/';

// methods definitions
function sendValue1() {
  sendRequest('osc/send-value-1');
}

function sendValue2() {
  sendRequest('osc/send-value-2');
}

function sendValue3() {
  sendRequest('osc/send-value-3');
}

function sendValue4() {
  sendRequest('osc/send-value-4');
}


// private methods definitions
function sendRequest(endpointUrl) {
  var request = new XMLHttpRequest();
  request.open('GET', BASE_URL + endpointUrl);
  request.send();
}

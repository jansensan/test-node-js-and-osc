import OSCService from './services/osc-service';

require('./styles/main.scss');


class IndexPage {
  constructor() {
    // dom elements
    this.sendMaxValue1Button = document.getElementById('sendMaxValue1Button');
    this.sendMaxValue2Button = document.getElementById('sendMaxValue2Button');
    this.sendMaxValue3Button = document.getElementById('sendMaxValue3Button');
    this.sendMaxValue4Button = document.getElementById('sendMaxValue4Button');
    this.sendProcessingValue1Button = document.getElementById('sendProcessingValue1Button');
    this.sendProcessingValue2Button = document.getElementById('sendProcessingValue2Button');

    // event/signals handlers
    this.sendMaxValue1Button.addEventListener('click', OSCService.sendMaxValue1);
    this.sendMaxValue2Button.addEventListener('click', OSCService.sendMaxValue2);
    this.sendMaxValue3Button.addEventListener('click', OSCService.sendMaxValue3);
    this.sendMaxValue4Button.addEventListener('click', OSCService.sendMaxValue4);
    this.sendProcessingValue1Button.addEventListener('click', OSCService.sendProcessingValue1);
    this.sendProcessingValue2Button.addEventListener('click', OSCService.sendProcessingValue2);
  }
}


let page = new IndexPage();

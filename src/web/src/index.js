import OSCService from './services/osc-service';

require('./styles/main.scss');


class IndexPage {
  constructor() {
    // dom elements
    this.sendValue1Button = document.getElementById('sendValue1Button');
    this.sendValue2Button = document.getElementById('sendValue2Button');
    this.sendValue3Button = document.getElementById('sendValue3Button');
    this.sendValue4Button = document.getElementById('sendValue4Button');

    // event/signals handlers
    this.sendValue1Button.addEventListener('click', OSCService.sendValue1);
    this.sendValue2Button.addEventListener('click', OSCService.sendValue2);
    this.sendValue3Button.addEventListener('click', OSCService.sendValue3);
    this.sendValue4Button.addEventListener('click', OSCService.sendValue4);
  }
}


let page = new IndexPage();

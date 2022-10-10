export default class Slider {
  sliderWrapper = document.querySelector(this.selector);


  constructor(selector, data) {
    this.selector = selector;
    this.data = data;
  }

  runSlider() {
    this.addClass()
    this.displayInfo()
  }

  addClass() {
    console.log(this.sliderWrapper);
  }

  displayInfo() {
    console.log(this.selector, this.data)
  }

}





export default class Slider {

  constructor(selector, data) {
    this.selector = selector;
    this.data = data;
  }
  sliderWrapper = document.querySelector('#slider');
  slide = document.createElement('div');

  initSlider() {
    this.addClass()
    this.displayInfo()
    this.processDataforSlides(this.data)
  }


  processDataforSlides(data) {
    // removeAllChildNodes(sliderWrapper);
    console.log(data)
    data.forEach((slideData) => {
      this.renderTemplate(slideData);
    });
  }

  renderTemplate(slideData) {
    console.log(this.slide);

    this.slide.classList.add('prefer__slider-slide');
    this.slide.innerHTML = `<img src=${slideData.url} alt="Graphic Design" width="198" />
    <div class="bg-position slide-1-bg"></div>
    <p class="prefer__slider-text">${slideData.title}</p>`

    this.sliderWrapper.appendChild(this.slide);
  }

  addClass() {
    this.sliderWrapper.classList.add('666666666666')
    console.log(this.sliderWrapper);
  }

  displayInfo() {
    console.log(this.selector, this.data)
  }

}





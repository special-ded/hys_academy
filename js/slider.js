export default class Slider {

  constructor(selector, data) {
    this.selector = selector;
    this.data = data;
  }

  initSlider() {
    this.slider = document.querySelector(this.selector);
    this.processDataforSlides(this.data)
  }

  renderLeftArrow(side) {
    this.arrow = document.createElement('button');
    this.arrow.classList.add('slider__arrow-btn')

    this.arrow.innerHTML = `<svg class="slider__arrow arrow-${side}" viewBox="0 0 33 32" width="40">
    <use href="./assets/images/sprite.svg#icon-slide-${side}"></use>
    </svg>`
    this.slider.appendChild(this.arrow);
  }

  processDataforSlides(data) {
    this.sliderInner = document.createElement('div');
    this.renderLeftArrow('left')
    this.sliderInner.classList.add('prefer__slider-inner')
    this.slider.appendChild(this.sliderInner)

    data.forEach((slideData) => {
      this.renderTemplate(slideData);
    });

    this.renderLeftArrow('right')
  }

  renderTemplate(slideData) {
    this.slide = document.createElement('div');

    this.slide.classList.add('prefer__slider-slide');
    this.slide.innerHTML = `<img src=${slideData.url} alt="Graphic Design" width="198" />
    <div class="bg-position "></div>
    <p class="prefer__slider-text">${slideData.title.slice(0, 10)}</p>`

    this.sliderInner.appendChild(this.slide);
  }
}





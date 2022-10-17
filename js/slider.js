export default class Slider {

  constructor(selector, data) {
    this.selector = selector;
    this.data = data;
  }

  initSlider() {
    this.slider = document.querySelector(this.selector);
    this.processDataforSlides(this.data);
    this.initIventListener();
    this.multiplier = 0;
    this.buttonHandler(this.multiplier)
  }

  renderLeftArrow(side) {
    this.arrow = document.createElement('button');
    this.arrow.classList.add('slider__arrow-btn');

    this.arrow.innerHTML = `<svg class="slider__arrow arrow-${side}" viewBox="0 0 33 32" width="40">
    <use class="arrow-${side}" href="./assets/images/sprite.svg#icon-slide-${side}"></use>
    </svg>`
    this.slider.appendChild(this.arrow);
  }

  initIventListener() {
    this.slider.addEventListener('click', (event) => {
      this.isButtonClass(event) ? this.clickHandler(event) : null;
    })
  }

  isButtonClass(event) {
    this.buttonClasses = ['arrow-left', 'arrow-right']
    this.buttonClassName = event.target.className.baseVal;

    return this.buttonClasses.includes(this.buttonClassName);
  }

  clickHandler(event) {
    this.maxMultiplier = this.data.length - 4;

    if (event.target.className.baseVal === 'arrow-right') {
      ++this.multiplier
      this.slidesInner.setAttribute('style', `transform: translateX(-${this.multiplier * 217}px)`);
      this.buttonHandler(this.multiplier)
      return
    } else {
      this.arrow.removeAttribute('disabled');
      this.multiplier > 0 ? --this.multiplier : null;
      this.slidesInner.setAttribute('style', `transform: translateX(-${this.multiplier * 217}px)`);
      this.buttonHandler(this.multiplier)
    }
  }

  buttonHandler(multiplier) {
    this.arrowParent = [...document.querySelectorAll('.slider__arrow-btn')];
    this.arrowLeft = this.arrowParent.find(el => el.children[0].className.baseVal === 'slider__arrow arrow-left')
    // this.arrowLeft.disabled = true;

    if (multiplier >= this.maxMultiplier) {
      this.arrow.disabled = true;
    }

    if (multiplier === 0) {

      this.arrowLeft.disabled = true;
    } else {
      this.arrowLeft.disabled = false;
    }

  }

  processDataforSlides(data) {
    this.slidesInner = document.createElement('div');
    this.slidesWrapper = document.createElement('div');
    this.renderLeftArrow('left');
    this.slidesWrapper.classList.add('prefer__slides-wrapper');
    this.slider.appendChild(this.slidesWrapper);
    this.slidesInner.classList.add('prefer__slides-inner');
    this.slidesWrapper.appendChild(this.slidesInner);

    data.forEach((slideData) => {
      this.renderTemplate(slideData);
    });

    this.renderLeftArrow('right');
  }

  renderTemplate(slideData) {
    this.slide = document.createElement('div');

    this.slide.classList.add('prefer__slider-slide');
    this.slide.innerHTML = `<img src=${slideData.url} alt="Graphic Design" width="198" />
    <div class="bg-position "></div>
    <p class="prefer__slider-text">${slideData.title.slice(0, 10)}</p>`

    this.slidesInner.appendChild(this.slide);
  }
}





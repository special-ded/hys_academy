export default class Slider {

  constructor(selector, data) {
    this.selector = selector;
    this.data = data;
  }

  initSlider() {
    this.slider = document.querySelector(this.selector);
    this.processDataforSlides(this.data)
    this.initIventListener()
    this.multiplier = 0
  }

  renderLeftArrow(side) {
    this.arrow = document.createElement('button');
    this.arrow.classList.add('slider__arrow-btn')

    this.arrow.innerHTML = `<svg class="slider__arrow arrow-${side}" viewBox="0 0 33 32" width="40">
    <use class="arrow-${side}" href="./assets/images/sprite.svg#icon-slide-${side}"></use>
    </svg>`
    this.slider.appendChild(this.arrow);
  }

  initIventListener() {
    this.slider.addEventListener('click', (event) => {
      this.includesButtonClass(event) ? this.clickHandler(event) : null
    })
  }

  includesButtonClass(event) {
    this.buttonClasses = ['arrow-left', 'arrow-right']
    this.buttonClassName = event.target.className.baseVal;

    return this.buttonClasses.includes(this.buttonClassName);
  }

  clickHandler(event) {
    this.maxMultiplier = this.data.length - 5

    if (this.multiplier >= this.maxMultiplier) {
      this.arrow.disabled = true;
    }

    if (event.target.className.baseVal === 'arrow-right') {
      this.multiplier += 1
      this.slidesInner.setAttribute('style', `transform: translateX(-${this.multiplier * 217}px)`)
    } else {
      this.arrow.removeAttribute('disabled');
      this.multiplier > 0 ? this.multiplier -= 1 : null;
      this.slidesInner.setAttribute('style', `transform: translateX(-${this.multiplier * 217}px)`)
    }
  }

  processDataforSlides(data) {
    this.slidesInner = document.createElement('div');
    this.slidesWrapper = document.createElement('div');
    this.renderLeftArrow('left')
    this.slidesWrapper.classList.add('prefer__slides-wrapper')
    this.slider.appendChild(this.slidesWrapper)
    this.slidesInner.classList.add('prefer__slides-inner')
    this.slidesWrapper.appendChild(this.slidesInner)

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

    this.slidesInner.appendChild(this.slide);
  }
}





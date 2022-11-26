export default class Slider {
  arrowLeftClass = 'arrow-left';
  arrowRightClass = 'arrow-right';
  arrowBtnClass = 'slider__arrow-btn'

  constructor(selector, data) {
    this.selector = selector;
    this.data = data;
    this.slider = document.querySelector(this.selector);
    this.page = 0;
    this.initSlider()
  }

  initSlider() {
    this.slider.innerHTML = '';
    this.processDataForSlides(this.data);
    this.initIventListener();
    this.buttonHandler(this.page);
    this.changeSlidesQuantity();
  }

  renderButtons(buttonSide) {
    this.button = document.createElement('button');
    this.button.classList.add(this.arrowBtnClass);

    this.button.innerHTML = this.getButtonTemplate(buttonSide);

    this.slider.appendChild(this.button);
  }

  getButtonTemplate(buttonSide) {
    return `
    <svg class="slider__arrow arrow-${buttonSide}" viewBox="0 0 33 32" width="40">
      <use class="arrow-${buttonSide}" 
        href="./assets/images/sprite.svg#icon-slide-${buttonSide}">
      </use>
    </svg>
      `;
  }

  initIventListener() {
    this.slider.addEventListener('click', (event) => {

      if (this.isButtonClass(event)) {
        this.clickHandler(event);
      }
    })

    window.addEventListener('resize', () => this.changeSlidesQuantity());
  }

  isButtonClass(event) {
    this.buttonClasses = [this.arrowLeftClass, this.arrowRightClass];
    this.buttonClassName = event.target.className.baseVal;

    return this.buttonClasses.includes(this.buttonClassName);
  }

  clickHandler(event) {
    this.maxPage = this.data.length - this.slidesShown;

    if (event.target.className.baseVal === this.arrowRightClass) {
      ++this.page;
      this.slidesInner.setAttribute('style', `transform: translateX(-${this.page * 217.5}px)`);
      this.buttonHandler(this.page);
      return;
    }

    if (event.target.className.baseVal === this.arrowLeftClass) {
      --this.page;
      this.slidesInner.setAttribute('style', `transform: translateX(-${this.page * 217.5}px)`);
      this.buttonHandler(this.page);
    }
  }

  buttonHandler(page) {
    this.arrowParent = [...document.querySelectorAll('.' + this.arrowBtnClass)];
    this.arrowLeft = this.arrowParent.find(el => el.children[0].className.baseVal === 'slider__arrow arrow-left');

    this.arrowLeft.disabled = page === 0;
    this.button.disabled = page >= this.maxPage;
  }

  processDataForSlides(data) {
    this.slidesInner = document.createElement('div');
    this.slidesWrapper = document.createElement('div');

    this.renderButtons('left');
    this.slidesWrapper.classList.add('prefer__slides-wrapper');
    this.slider.appendChild(this.slidesWrapper);
    this.slidesInner.classList.add('prefer__slides-inner');
    this.slidesWrapper.appendChild(this.slidesInner);

    data.forEach((slideData) => {
      this.renderTemplate(slideData);
    });

    this.renderButtons('right');
  }

  renderTemplate(slideData) {
    this.slide = document.createElement('div');
    this.slide.classList.add('prefer__slider-slide');
    this.slide.innerHTML = this.getSlideTemplate(slideData);
    this.slidesInner.appendChild(this.slide);
  }

  getSlideTemplate(slideData) {
    return `<img src=${slideData.url} alt="Graphic Design" width="198" />
    <div class="bg-position "></div>
    <p class="prefer__slider-text">${slideData.title.slice(0, 10)}</p>`;
  }

  changeSlidesQuantity() {

    if (window.innerWidth < 620) {
      this.slider.style.maxWidth = '336px';
      this.slidesShown = 1;
      return;
    }

    if (window.innerWidth < 800) {
      this.slider.style.maxWidth = '554px';
      this.slidesShown = 2;
      return;
    }

    if (window.innerWidth < 1020) {
      this.slider.style.maxWidth = '768px';
      this.slidesShown = 3;
      return;
    }

    if (window.innerWidth > 1020) {
      this.slider.style.maxWidth = '990px';
      this.slidesShown = 4;
    }
  }
}





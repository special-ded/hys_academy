import { Data } from "./data-interface";

export default class Slider {
  arrowLeftClass: string = 'arrow-left';
  arrowRightClass: string = 'arrow-right';
  arrowBtnClass: string = 'slider__arrow-btn';
  selector: string;
  data: Data[];
  slider: Element;
  page: number;
  button: Element;
  maxPage: number;
  slidesShown: number;
  slidesInner: Element;
  slide: Element;

  constructor(selector: string, data: Data[]) {
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

  renderButtons(buttonSide: string) {
    this.button = document.createElement('button');
    this.button.classList.add(this.arrowBtnClass);
    this.button.classList.add(`arrow-${buttonSide}`)
    this.button.innerHTML = this.getButtonTemplate(buttonSide);

    this.slider.appendChild(this.button);
  }

  getButtonTemplate(buttonSide: string) {
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

  isButtonClass(event: Event) {
    const buttonClasses: string[] = [this.arrowLeftClass, this.arrowRightClass];
    const buttonClassName = (event.target as SVGAnimateElement).className.baseVal;

    return buttonClasses.includes(buttonClassName);
  }

  clickHandler(event: Event) {
    this.maxPage = this.data.length - this.slidesShown;

    if ((event.target as SVGAnimateElement).className.baseVal === this.arrowRightClass) {
      ++this.page;
      this.slidesInner.setAttribute('style', `transform: translateX(-${this.page * 217.5}px)`);
      this.buttonHandler(this.page);
      return;
    }

    if ((event.target as SVGAnimateElement).className.baseVal === this.arrowLeftClass) {
      --this.page;
      this.slidesInner.setAttribute('style', `transform: translateX(-${this.page * 217.5}px)`);
      this.buttonHandler(this.page);
    }
  }

  buttonHandler(page: number) {
    const arrowParent: NodeListOf<Element> = document.querySelectorAll('.slider__arrow-btn');
    const arrowParentArr: HTMLInputElement[] = Array.prototype.slice.call(arrowParent);
    const arrowLeft = arrowParentArr.find(el => el.className === 'slider__arrow-btn arrow-left');

    arrowLeft.disabled = page === 0;
    (this.button as HTMLInputElement).disabled = page >= this.maxPage;
  }

  processDataForSlides(data: Data[]) {
    this.slidesInner = document.createElement('div');
    const slidesWrapper: HTMLElement = document.createElement('div');

    this.renderButtons('left');
    slidesWrapper.classList.add('prefer__slides-wrapper');
    this.slider.appendChild(slidesWrapper);
    this.slidesInner.classList.add('prefer__slides-inner');
    slidesWrapper.appendChild(this.slidesInner);

    data.forEach((slideData) => {
      this.renderTemplate(slideData);
    });

    this.renderButtons('right');
  }

  renderTemplate(slideData: Data) {
    this.slide = document.createElement('div');
    this.slide.classList.add('prefer__slider-slide');
    this.slide.innerHTML = this.getSlideTemplate(slideData);
    this.slidesInner.appendChild(this.slide);
  }

  getSlideTemplate(slideData: Data) {
    return `
    <img src="${slideData.url}" alt="Graphic Design" width="198" />
      <div class="bg-position"></div>
    <p class="prefer__slider-text">${slideData.title.slice(0, 10)}</p>
    `;
  }

  changeSlidesQuantity() {

    if (window.innerWidth < 620) {
      (this.slider as HTMLInputElement).style.maxWidth = '336px';
      this.slidesShown = 1;
      return;
    }

    if (window.innerWidth < 800) {
      (this.slider as HTMLInputElement).style.maxWidth = '554px';
      this.slidesShown = 2;
      return;
    }

    if (window.innerWidth < 1020) {
      (this.slider as HTMLInputElement).style.maxWidth = '768px';
      this.slidesShown = 3;
      return;
    }

    if (window.innerWidth > 1020) {
      (this.slider as HTMLInputElement).style.maxWidth = '990px';
      this.slidesShown = 4;
    }
  }
}





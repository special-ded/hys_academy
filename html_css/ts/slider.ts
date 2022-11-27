import { Data } from "./models/interfaces.model";
import { Side } from "./models/slider-type.model";


export default class Slider {
  private arrowLeftClass: string = 'arrow-left';
  private arrowRightClass: string = 'arrow-right';
  private arrowBtnClass: string = 'slider__arrow-btn';
  private selector: string;
  private data: Data[];
  private slider: Element;
  private page: number;
  private button: Element;
  private maxPage: number;
  private slidesShown: number;
  private slidesInner: Element;
  private slide: Element;

  constructor(selector: string, data: Data[]) {
    this.selector = selector;
    this.data = data;
    this.slider = document.querySelector(this.selector);
    this.page = 0;
    this.initSlider();
  }

  private initSlider(): void {
    this.slider.innerHTML = '';
    this.processDataForSlides(this.data);
    this.initIventListener();
    this.buttonHandler(this.page);
    this.changeSlidesQuantity();
  }


  private renderButtons(buttonSide: Side): void {

    this.button = document.createElement('button');
    this.button.classList.add(this.arrowBtnClass);
    this.button.classList.add(`arrow-${buttonSide}`);
    this.button.innerHTML = this.getButtonTemplate(buttonSide);

    this.slider.appendChild(this.button);
  }

  private getButtonTemplate(buttonSide: Side): string {
    return `
    <svg class="slider__arrow arrow-${buttonSide}" viewBox="0 0 33 32" width="40">
      <use class="arrow-${buttonSide}"
        href="./assets/images/sprite.svg#icon-slide-${buttonSide}">
      </use>
    </svg>
      `;
  }

  private initIventListener(): void {
    this.slider
      .addEventListener(
        'click', (event) => {

          if (this.isButtonClass(event)) {
            this.clickHandler(event);
          }
        })
    window.addEventListener('resize', (): void => this.changeSlidesQuantity());
  }

  private isButtonClass(event: Event): boolean {
    const buttonClasses: string[] = [this.arrowLeftClass, this.arrowRightClass];
    const buttonClassName: string = (event.target as SVGAnimateElement).className.baseVal;

    return buttonClasses.includes(buttonClassName);
  }

  private clickHandler(event: Event): void {
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

  private buttonHandler(page: number): void {
    const arrowParent: NodeListOf<Element> = document.querySelectorAll('.slider__arrow-btn');
    const arrowParentArr: HTMLInputElement[] = Array.prototype.slice.call(arrowParent);
    const arrowLeft: HTMLInputElement = arrowParentArr.find(el => el.className === 'slider__arrow-btn arrow-left');

    arrowLeft.disabled = page === 0;
    (this.button as HTMLInputElement).disabled = page >= this.maxPage;
  }

  private processDataForSlides(data: Data[]): void {
    console.log(data);

    this.slidesInner = document.createElement('div');
    const slidesWrapper: HTMLElement = document.createElement('div');

    this.renderButtons('left');
    slidesWrapper.classList.add('prefer__slides-wrapper');
    this.slider.appendChild(slidesWrapper);
    this.slidesInner.classList.add('prefer__slides-inner');
    slidesWrapper.appendChild(this.slidesInner);

    data.forEach((slideData: Data): void => {
      this.renderTemplate(slideData);
    });

    this.renderButtons('right');
  }

  private renderTemplate(slideData: Data): void {
    this.slide = document.createElement('div');
    this.slide.classList.add('prefer__slider-slide');
    this.slide.innerHTML = this.getSlideTemplate(slideData);
    this.slidesInner.appendChild(this.slide);
  }

  private getSlideTemplate(slideData: Data): string {
    return `
    <img src="${slideData.url}" alt="Graphic Design" width="198" />
      <div class="bg-position"></div>
    <p class="prefer__slider-text">${slideData.title.slice(0, 10)}</p>
    `;
  }

  private changeSlidesQuantity(): void {

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





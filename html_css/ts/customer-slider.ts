import { Data } from "./models/interfaces.model";

export default class CustomerSlider {
  buttons: HTMLButtonElement = document.querySelector('.customer__dots');
  activeButtonClass: string = "customer__dot_active";
  image: HTMLImageElement = document.querySelector('.customers__img');
  firstText: HTMLParagraphElement = document.querySelector('.customers__text-first');
  secondText: HTMLParagraphElement = document.querySelector('.customers__text-second');
  selector: string;
  data: Data[];
  slider: HTMLElement;

  constructor(selector: string, data: Data[]) {
    this.selector = selector;
    this.data = data;
    this.slider = document.querySelector(this.selector);
    this.initSlider();
  }

  initSlider(): void {
    this.initEventListener()
  }

  initEventListener(): void {
    this.buttons.addEventListener('click', (event) => this.clickHandler(event))
  }

  clickHandler(event: Event): void {
    if (!(event.target as HTMLButtonElement).value) {
      return
    }
    this.activeBtnToggler(event, this.activeButtonClass)
  }

  activeBtnToggler(event: Event, activeButtonClass: string): void {
    let activeBtn = document.querySelector(`.` + activeButtonClass);

    activeBtn.classList.remove(activeButtonClass);
    (event.target as HTMLButtonElement).classList.add(activeButtonClass);

    this.renderImage((event.target as HTMLInputElement & { value: number }).value)
    this.renderText((event.target as HTMLButtonElement & { value: number }).value)
  }

  renderImage(activeBtn: number): void {
    this.image.src = this.data[activeBtn - 1].url
  }

  renderText(activeBtn: number): void {
    this.firstText.innerText = this.data[activeBtn].title
    this.secondText.innerText = this.data[activeBtn].title
  }
}



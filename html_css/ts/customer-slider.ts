import { Data } from "./types/data-interface";

export default class CustomerSlider {
  private buttons: HTMLButtonElement = document.querySelector('.customer__dots');
  private activeButtonClass: string = "customer__dot_active";
  private image: HTMLImageElement = document.querySelector('.customers__img');
  private firstText: HTMLParagraphElement = document.querySelector('.customers__text-first');
  private secondText: HTMLParagraphElement = document.querySelector('.customers__text-second');
  private selector: string;
  private data: Data[];
  private slider: HTMLElement;

  constructor(selector: string, data: Data[]) {
    this.selector = selector;
    this.data = data;
    this.slider = document.querySelector(this.selector);
    this.initSlider();
  }

  private initSlider(): void {
    this.initEventListener()
  }

  private initEventListener(): void {
    this.buttons.addEventListener('click', (event: Event) => this.clickHandler(event))
  }

  private clickHandler(event: Event): void {
    if (!(event.target as HTMLButtonElement).value) {
      return
    }
    this.activeBtnToggler(event, this.activeButtonClass)
  }

  private activeBtnToggler(event: Event, activeButtonClass: string): void {
    let activeBtn = document.querySelector(`.` + activeButtonClass);

    activeBtn.classList.remove(activeButtonClass);
    (event.target as HTMLButtonElement).classList.add(activeButtonClass);

    this.renderImage((event.target as HTMLInputElement & { value: number }).value)
    this.renderText((event.target as HTMLButtonElement & { value: number }).value)
  }

  private renderImage(activeBtn: number): void {
    this.image.src = this.data[activeBtn - 1].url
  }

  private renderText(activeBtn: number): void {
    this.firstText.innerText = this.data[activeBtn].title
    this.secondText.innerText = this.data[activeBtn].title
  }
}



import { Data } from "./models/interfaces.model";

const sliderScroll: Element = document.querySelector('.blog__slider-scroll');
const activeButtonClass: string = "blog__slider-btn_active";
let sliderWrapper: Element;

export default function Paginator(selector: string, data: Data[]): void {

  sliderWrapper = document.querySelector(selector);
  const slidesQuantity: number = 2;
  const activeButton: number = 1;

  if (data.length > 2) {
    renderButtons<Data[]>(data);
  }

  initClickListener(slidesQuantity, data);
  updateData(slidesQuantity, activeButton, data);
  checkTranslateProperty();
}

function initClickListener(slidesQuantity: number, data: Data[]): void {
  sliderScroll.addEventListener('click', clickHandler.bind(this, slidesQuantity, data));
}

function clickHandler(slidesQuantity: number, data: Data[], event: Event): void {
  let activeButton: number = 0;

  if ((event.target as HTMLButtonElement).value) {
    activeButton = Number((event.target as HTMLButtonElement).value)

    activeBtnToggler(event, activeButtonClass);
    updateData(slidesQuantity, activeButton, data);
    buttonScrollHandler(activeButton, data);
  }
}

function updateData(slidesQuantity: number, activeButton: number, data: Data[]): void {
  const currentData: Data[] = data.slice(slidesQuantity * activeButton - slidesQuantity,
    slidesQuantity * activeButton);
  renderNewSlides(currentData);
}

function removeAllChildNodes(parent: Element): void {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function checkTranslateProperty(): string {
  return window.innerWidth < 769
    ? "translateX"
    : "translateY";
}

function buttonScrollHandler(activeButton: number, data: Data[]): void {
  const sliderScrollWrap: Element = document.querySelector('.blog__slider-scroll-wrap');
  const translateProperty: string = checkTranslateProperty();

  if (activeButton <= 3) {
    sliderScrollWrap
      .setAttribute(
        "style", `transform: ${translateProperty}(-0px)`);
    return;
  }

  if (activeButton > 3 && activeButton <= Math.round(data.length / 2) - 2) {
    sliderScrollWrap
      .setAttribute(
        "style", `transform: ${translateProperty}(-${62 * (activeButton - 3)}px)`);
    return;
  }

  if (activeButton == Math.round(data.length / 2) - 1) {
    sliderScrollWrap
      .setAttribute(
        "style", `transform: ${translateProperty}(-${62 * (activeButton - 4)}px)`);
    return;
  }
}

function renderButtons<T extends Data[]>(data: T): void {
  const sliderScrollWrap: HTMLDivElement = document.createElement('div');
  const activeButton: HTMLButtonElement = document.createElement('button');

  sliderScrollWrap.classList.add('blog__slider-scroll-wrap');
  sliderScroll.appendChild(sliderScrollWrap);
  activeButton.classList.add('blog__slider-btn');
  activeButton.classList.add('blog__slider-btn_active');
  activeButton.innerText = "1";
  activeButton.value = "1";
  sliderScrollWrap.appendChild(activeButton);

  for (let i = 0; i < (data.length / 2) - 1; i++) {
    const button: HTMLButtonElement = document.createElement('button');

    button.classList.add('blog__slider-btn');
    button.innerText = String(i + 2);
    button.value = String(i + 2);
    sliderScrollWrap.appendChild(button);
  }
}

function renderNewSlides(currentData: Data[]): void {
  removeAllChildNodes(sliderWrapper);

  currentData.forEach((slideData) => {
    renderTemplate<Data>(slideData);
  });
}

function renderTemplate<T extends Data>(slideData: T): void {
  const slide: HTMLDivElement = document.createElement('div');

  slide.classList.add('blog__slider-item');
  slide.innerHTML = getSlideTemplate<T>(slideData);
  sliderWrapper.appendChild(slide);
  smoothRendering(slide);
}

function getSlideTemplate<T extends Data>(slideData: T): string {
  return `
    <div class="blog__slider-item-bg" ></div>
    <img class="blog__slider-item-img" src =${slideData.url} alt = "Blog image" />
    <p class="blog__item-side-text">${slideData.category}</p>
    <div class="blog__slider-title">
      <img class="blog__slider-user-img" src=${slideData.userImage} width="48" height="48" alt="slider img1 small" />
      <h3 class="slider-title">${slideData.title.slice(0, 40)}</h3>
    </div>
    <a class="blog__item_link" href=${slideData.redirectLink}>Read Now</a>`
}

function smoothRendering(slide: Element): void {
  slide.classList.add('opacity');
  setTimeout(() => { slide.classList.remove('opacity') }, 200)
}

function activeBtnToggler(e: Event, activeButtonClass: string): void {
  let activeBtn: Element = document.querySelector(`.` + activeButtonClass);

  if (!(e.target as HTMLInputElement).value) {
    return
  }

  activeBtn.classList.remove(activeButtonClass);
  (e.target as HTMLInputElement).classList.add(activeButtonClass);
}
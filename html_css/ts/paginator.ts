import { Data } from "./types/data-interface";

const sliderScroll: Element = document.querySelector('.blog__slider-scroll');
const activeButtonClass: string = "blog__slider-btn_active";
let sliderWrapper: Element;

export default function paginator(selector: string, data: Data[]): void {

  sliderWrapper = document.querySelector(selector);
  const slidesQuantity: number = 2;
  const activeButtonNumber: number = 1;

  if (data.length > 2) {
    renderButtons(data);
  }

  initClickListener(slidesQuantity, data);
  updateData(slidesQuantity, activeButtonNumber, data);
  checkTranslateProperty();
}

function initClickListener(slidesQuantity: number, data: Data[]): void {
  sliderScroll.addEventListener('click', clickHandler.bind(this, slidesQuantity, data));
}

function clickHandler(slidesQuantity: number, data: Data[], event: Event): void {
  let activeButtonNumber: number = 0;

  if ((event.target as HTMLButtonElement).value) {
    activeButtonNumber = Number((event.target as HTMLButtonElement).value)

    activeBtnToggler(event, activeButtonClass);
    updateData(slidesQuantity, activeButtonNumber, data);
    buttonScrollHandler(activeButtonNumber, data);
  }
}

function updateData(slidesQuantity: number, activeButtonNumber: number, data: Data[]): void {
  const currentData: Data[] = data.slice(slidesQuantity * activeButtonNumber - slidesQuantity,
    slidesQuantity * activeButtonNumber);
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

function buttonScrollHandler(activeButtonNumber: number, data: Data[]): void {
  const sliderScrollWrap: Element = document.querySelector('.blog__slider-scroll-wrap');
  const translateProperty: string = checkTranslateProperty();

  if (activeButtonNumber <= 3) {
    sliderScrollWrap.setAttribute("style", `transform: ${translateProperty}(-0px)`);
    return;
  }

  if (activeButtonNumber > 3 && activeButtonNumber <= Math.round(data.length / 2) - 2) {
    sliderScrollWrap.setAttribute("style", `transform: ${translateProperty}(-${62 * (activeButtonNumber - 3)}px)`);
    return;
  }

  if (activeButtonNumber == Math.round(data.length / 2) - 1) {
    sliderScrollWrap.setAttribute("style", `transform: ${translateProperty}(-${62 * (activeButtonNumber - 4)}px)`);
    return;
  }
}

function renderButtons(data: Data[]): void {
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

function renderTemplate(slideData: Data): void {
  const slide: HTMLDivElement = document.createElement('div');

  slide.classList.add('blog__slider-item');
  slide.innerHTML = getSlideTemplate(slideData);
  sliderWrapper.appendChild(slide);
  smoothRendering(slide);
}

function getSlideTemplate(slideData: Data): string {
  return `
    <div class="blog__slider-item-bg" ></div>
    <img class="blog__slider-item-img" src =${slideData.url} alt = "Blog image" />
    <p class="blog__item-side-text">${slideData.category}</p>
    <div class="blog__slider-title">
      <img class="blog__slider-user-img" src=${slideData.userImage} width="48" height="48" alt="slider img1 small" />
      <h3 class="slider-title">${slideData.title}</h3>
    </div>
    <a class="blog__item_link" href=${slideData.redirectLink}>Read Now</a>`
}

function smoothRendering(slide: Element): void {
  slide.classList.add('opacity');
  setTimeout(() => { slide.classList.remove('opacity') }, 200)
}

function renderNewSlides(currentData: Data[]): void {
  removeAllChildNodes(sliderWrapper);

  currentData.forEach((slideData) => {
    renderTemplate(slideData);
  });
}

function activeBtnToggler(e: Event, activeButtonClass: string): void {
  let activeBtn: Element = document.querySelector(`.` + activeButtonClass);

  if (!(e.target as HTMLInputElement).value) {
    return
  }

  activeBtn.classList.remove(activeButtonClass);
  (e.target as HTMLInputElement).classList.add(activeButtonClass);
}
const sliderScroll = document.querySelector('.blog__slider-scroll');
let sliderWrapper = ''
const buttonClassName = "blog__slider-btn";


export default function paginator(selector, data) {
  sliderWrapper = document.querySelector(selector);
  const slidesQuantity = 2;
  // default active Button
  const activeButtonNumber = 1;

  renderButtons(data)
  initClickListener(slidesQuantity, data);
  setButtonState(slidesQuantity, data);
  updateData(slidesQuantity, activeButtonNumber, data);
  CheckTranslateProperty()
}

function includesButtonClass(event) {
  const buttonClasses = [...event.target.classList];

  return buttonClasses.includes(buttonClassName)
}


function initClickListener(slidesQuantity, data) {
  sliderScroll.addEventListener('click', clickHandler.bind(this, slidesQuantity, data))
}

function clickHandler(slidesQuantity, data, event) {
  let activeButtonNumber = 0;

  includesButtonClass(event)
    ? (activeButtonNumber = event.target.innerHTML,
      activeBtnToggler(event),
      updateData(slidesQuantity, activeButtonNumber, data),
      buttonScrollHandler(activeButtonNumber, data))
    : null;
}

function updateData(slidesQuantity, activeButtonNumber, data) {
  const currentData = data.slice(slidesQuantity * activeButtonNumber - slidesQuantity, slidesQuantity * activeButtonNumber);
  renderNewSlides(currentData);
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function CheckTranslateProperty() {
  let translateProperty = "translateY"
  return window.innerWidth < 769 ? translateProperty = "translateX" : translateProperty = "translateY"
}

function buttonScrollHandler(activeButtonNumber, data) {
  const sliderScrollWrap = document.querySelector('.blog__slider-scroll-wrap')
  const translateProperty = CheckTranslateProperty()

  if (activeButtonNumber <= 3) {
    sliderScrollWrap.setAttribute("style", `transform: ${translateProperty}(-0px)`);
  }

  if (activeButtonNumber > 3 && activeButtonNumber <= Math.round(data.length / 2) - 2) {
    sliderScrollWrap.setAttribute("style", `transform: ${translateProperty}(-${62 * (activeButtonNumber - 3)}px)`);
  }

  if (activeButtonNumber == Math.round(data.length / 2) - 1) {
    sliderScrollWrap.setAttribute("style", `transform: ${translateProperty}(-${62 * (activeButtonNumber - 4)}px)`);
  }
}

function renderButtons(data) {
  const sliderScrollWrap = document.createElement('div');
  const activeButton = document.createElement('button');

  sliderScrollWrap.classList.add('blog__slider-scroll-wrap');
  sliderScroll.appendChild(sliderScrollWrap);
  activeButton.classList.add('blog__slider-btn');
  activeButton.classList.add('blog__slider-btn_active');
  activeButton.innerText = 1
  sliderScrollWrap.appendChild(activeButton);

  for (let i = 0; i < (data.length / 2) - 1; i++) {
    const button = document.createElement('button');

    button.classList.add('blog__slider-btn');
    button.innerText = i + 2
    sliderScrollWrap.appendChild(button);
  }
}

function renderTemplate(slideData) {
  const slide = document.createElement('div');

  slide.classList.add('blog__slider-item');
  slide.innerHTML = `
    <div class="blog__slider-item-bg" ></div>
    <img class="blog__slider-item-img" src =${slideData.url} alt = "Blog image" />
    <p class="blog__item-side-text">${slideData.category}</p>
    <div class="blog__slider-title">
      <img class="blog__slider-user-img" src=${slideData.userImage} width="48" height="48" alt="slider img1 small" />
      <h3 class="slider-title">${slideData.title}</h3>
    </div>
    <a class="blog__item_link" href=${slideData.redirectLink}>Read Now</a>`

  sliderWrapper.appendChild(slide);
}

function renderNewSlides(currentData) {
  removeAllChildNodes(sliderWrapper);

  currentData.forEach((slideData) => {
    renderTemplate(slideData)
  });
}

function activeBtnToggler(e) {
  let activeBtn = sliderScroll.querySelector('.blog__slider-btn_active');

  if (includesButtonClass(e)) {
    activeBtn = sliderScroll.querySelector('.blog__slider-btn_active');
    // removing active class
    activeBtn.classList.remove('blog__slider-btn_active');
    // adding active class
    e.target.classList.add('blog__slider-btn_active');
  }
}

function setButtonState(slidesQuantity, data) {
  data.length / slidesQuantity <= 3 ? (sliderScroll.children[3].setAttribute("disabled", ""), sliderScroll.children[4].setAttribute("disabled", "")) : null;
  data.length / slidesQuantity <= 4 ? sliderScroll.children[4].setAttribute("disabled", "") : null;
}
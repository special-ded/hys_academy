const sliderScroll = document.querySelector('.blog__slider-scroll');
const sliderWrapper = document.querySelector('#paginator');
const buttonClassName = "blog__slider-btn";
const activeButtonClassName = "blog__slider-btn blog__slider-btn_active";


export default function paginator(sliderWrapper, DATA) {
  const slidesQuantity = 2;
  // default active Button
  const activeButtonNumber = 1;

  renderButtons(DATA)
  initClickListener(slidesQuantity, DATA);
  setButtonState(slidesQuantity, DATA);
  updateData(slidesQuantity, activeButtonNumber, DATA);
}

function initClickListener(slidesQuantity, DATA) {
  clickHandler(slidesQuantity, DATA);
}

function clickHandler(slidesQuantity, DATA) {
  let activeButtonNumber = 0;

  sliderScroll.addEventListener('click', (event) => {
    event.target.className === buttonClassName || event.target.className === activeButtonClassName ?
      (activeButtonNumber = event.target.innerHTML, activeBtnToggler(event)) : null
    updateData(slidesQuantity, activeButtonNumber, DATA);
    buttonScrollHandler(activeButtonNumber, DATA);
  })
}

function updateData(slidesQuantity, activeButtonNumber, DATA) {
  const currentData = DATA.slice(slidesQuantity * activeButtonNumber - slidesQuantity, slidesQuantity * activeButtonNumber);
  renderNewSlides(currentData);
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function translateProperty() {
  let translateProperty = "translateY"

  return window.innerWidth < 769 ? translateProperty = "translateX" : translateProperty = "translateY"
}

function buttonScrollHandler(activeButtonNumber, DATA) {
  const sliderScrollWrap = document.querySelector('.blog__slider-scroll-wrap')

  if (activeButtonNumber <= 3) {
    sliderScrollWrap.setAttribute("style", `transform: ${translateProperty()}(-0px)`);
  }

  if (activeButtonNumber > 3 && activeButtonNumber <= Math.round(DATA.length / 2) - 2) {
    sliderScrollWrap.setAttribute("style", `transform: ${translateProperty()}(-${62 * (activeButtonNumber - 3)}px)`);
  }

  if (activeButtonNumber == Math.round(DATA.length / 2) - 1) {
    sliderScrollWrap.setAttribute("style", `transform: ${translateProperty()}(-${62 * (activeButtonNumber - 4)}px)`);
  }
}

function renderButtons(DATA) {
  const sliderScrollWrap = document.createElement('div');
  sliderScrollWrap.classList.add('blog__slider-scroll-wrap');
  sliderScroll.appendChild(sliderScrollWrap);

  const activeButton = document.createElement('button');
  activeButton.classList.add('blog__slider-btn');
  activeButton.classList.add('blog__slider-btn_active');
  activeButton.innerText = 1
  sliderScrollWrap.appendChild(activeButton);

  for (let i = 0; i < (DATA.length / 2) - 1; i++) {
    const button = document.createElement('button');
    button.classList.add('blog__slider-btn');
    button.innerText = i + 2

    sliderScrollWrap.appendChild(button);
  }
}

function renderNewSlides(currentData) {
  removeAllChildNodes(sliderWrapper);

  currentData.forEach((element) => {
    const slide = document.createElement('div');
    slide.classList.add('blog__slider-item');
    slide.innerHTML = `
    <div class="blog__slider-item-bg" ></div>
    <img class="blog__slider-item-img" src =${element.url} alt = "Blog image" />
    <p class="blog__item-side-text">${element.category}</p>
    <div class="blog__slider-title">
      <img class="blog__slider-user-img" src=${element.userImage} width="48" height="48" alt="slider img1 small" />
      <h3 class="slider-title">${element.title}</h3>
    </div>
    <a class="blog__item_link" href=${element.redirectLink}>Read Now</a>`

    sliderWrapper.appendChild(slide);
  });
}

function activeBtnToggler(e) {
  let activeBtn = sliderScroll.querySelector('.blog__slider-btn_active');

  if ((e.target.className === buttonClassName ||
    e.target.className === activeButtonClassName)) {
    activeBtn = sliderScroll.querySelector('.blog__slider-btn_active');
    // removing active class
    activeBtn.classList.remove('blog__slider-btn_active');
    // adding active class
    e.target.classList.add('blog__slider-btn_active');
  }
}

function setButtonState(slidesQuantity, DATA) {
  DATA.length / slidesQuantity <= 3 ? (sliderScroll.children[3].setAttribute("disabled", ""), sliderScroll.children[4].setAttribute("disabled", "")) : null;
  DATA.length / slidesQuantity <= 4 ? sliderScroll.children[4].setAttribute("disabled", "") : null;
}
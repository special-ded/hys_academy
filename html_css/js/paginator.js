const sliderScroll = document.querySelector('.blog__slider-scroll');
const sliderWrapper = document.querySelector('#paginator');
const buttonClassName = "blog__slider-btn";
const activeButtonClassName = "blog__slider-btn blog__slider-btn_active";


export default function paginator(sliderWrapper, DATA) {
  const slidesQuantity = 2;
  // default active Button
  const activeButtonNumber = 1;

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
    event.target.className === buttonClassName || event.target.className === activeButtonClassName ? (activeButtonNumber = event.target.innerHTML, activeBtnToggler(event)) : null
    updateData(slidesQuantity, activeButtonNumber, DATA);
  })
}

function updateData(slidesQuantity, activeButtonNumber, DATA) {
  const currentData = DATA.slice(slidesQuantity * activeButtonNumber - slidesQuantity, slidesQuantity * activeButtonNumber);
  renderNewSlides(currentData);
  // sliderHandler(currentData);
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function renderNewSlides(currentData) {
  removeAllChildNodes(sliderWrapper);

  currentData.forEach((element) => {
    const slide = document.createElement('div');
    slide.classList.add('blog__slider-item');
    slide.innerHTML = `            
    <div class="blog__slider-item-bg"></div>
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

// function sliderHandler(currentData) {
//   currentData.length === 1 ? sliderWrapper.children[1].classList.add('display-none') : sliderWrapper.children[1].classList.remove('display-none');
// }

function setButtonState(slidesQuantity, DATA) {
  DATA.length / slidesQuantity <= 3 ? (sliderScroll.children[3].setAttribute("disabled", ""), sliderScroll.children[4].setAttribute("disabled", "")) : null;
  DATA.length / slidesQuantity <= 4 ? sliderScroll.children[4].setAttribute("disabled", "") : null;
}
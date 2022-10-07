const sliderScroll = document.querySelector('.blog__slider-scroll')
const sliderWrapper = document.querySelector('#paginator')



export default function paginator(sliderWrapper, DATA) {
  const slidesQuantity = sliderWrapper.children.length
  // default active Button
  const buttonClicked = 3

  clickHandler(slidesQuantity, DATA)
  btnDisabler(slidesQuantity, DATA)
  updateData(slidesQuantity, buttonClicked, DATA)
}

function clickHandler(slidesQuantity, DATA) {
  let buttonClicked = 3
  sliderScroll.addEventListener('click', (event) => {
    event.target.className === "blog__slider-btn" || event.target.className === "blog__slider-btn blog__slider-btn_active" ? (buttonClicked = event.target.innerHTML, activeBtnToggler(event)) : null
    updateData(slidesQuantity, buttonClicked, DATA)
  })
}

function updateData(slidesQuantity, buttonClicked, DATA) {
  const currentData = DATA.slice(slidesQuantity * buttonClicked - slidesQuantity, slidesQuantity * buttonClicked);

  renderNewSlides(currentData)
  sliderHandler(currentData);
}

function renderNewSlides(currentData) {
  currentData.forEach((element, i) => {
    sliderWrapper.children[i].querySelector('.slider-title').innerText = element.title;
    sliderWrapper.children[i].querySelector('.blog__slider-item-img').src = element.url;
  });
}

function activeBtnToggler(e) {
  let activeBtn = sliderScroll.querySelector('.blog__slider-btn_active')

  if (sliderScroll.querySelector('.blog__slider-btn_active') && (e.target.className === "blog__slider-btn" ||
    e.target.className === "blog__slider-btn blog__slider-btn_active")) {
    activeBtn = sliderScroll.querySelector('.blog__slider-btn_active');
    // removing active class
    activeBtn.classList.remove('blog__slider-btn_active');
    // adding active class
    e.target.classList.add('blog__slider-btn_active');
  }
}

function sliderHandler(currentData) {
  currentData.length === 1 ? sliderWrapper.children[1].classList.add('display-none') : sliderWrapper.children[1].classList.remove('display-none')
}

function btnDisabler(slidesQuantity, DATA) {
  DATA.length / slidesQuantity <= 3 ? (sliderScroll.children[3].setAttribute("disabled", ""), sliderScroll.children[4].setAttribute("disabled", "")) : null
  DATA.length / slidesQuantity <= 4 ? sliderScroll.children[4].setAttribute("disabled", "") : null
}


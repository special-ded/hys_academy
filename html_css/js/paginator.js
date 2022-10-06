const sliderScroll = document.querySelector('.blog__slider-scroll')
const sliderWrapper = document.querySelector('.blog__slider-wrapper')
const sliderQuantity = sliderWrapper.children.length
let buttonActive = 3

const DATA = [
  {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://via.placeholder.com/600/771796",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  },
  {
    "albumId": 1,
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "https://via.placeholder.com/600/24f355",
    "thumbnailUrl": "https://via.placeholder.com/150/24f355"
  },
  {
    "albumId": 1,
    "id": 4,
    "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    "url": "https://via.placeholder.com/600/d32776",
    "thumbnailUrl": "https://via.placeholder.com/150/d32776"
  },
  {
    "albumId": 1,
    "id": 5,
    "title": "natus nisi omnis corporis facere molestiae rerum in",
    "url": "https://via.placeholder.com/600/f66b97",
    "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
  }]

let currentData = []
let activeBtn = sliderScroll.querySelector('.blog__slider-btn_active')

getData(sliderQuantity, buttonActive)
btnDisabler()

// getting number of button clicked
sliderScroll.addEventListener('click', (event) => {
  event.target.className === "blog__slider-btn" || "blog__slider-btn blog__slider-btn_active"
    ? (buttonActive = event.target.innerHTML, activeBtnToggler(event))
    : null
  getData(sliderQuantity, buttonActive)
})

function paginator(sliderWrapper, currentData) {
  currentData.forEach((element, i) => {
    sliderWrapper.children[i].querySelector('.slider-title').innerText = element.title
    sliderWrapper.children[i].querySelector('.blog__slider-item-img').src = element.url
  });
}

function getData(quantity, btn) {
  currentData = DATA.slice(quantity * btn - quantity, quantity * btn)
  sliderHandler(currentData, btn)
  paginator(sliderWrapper, currentData)
}

function activeBtnToggler(e) {
  if (sliderScroll.querySelector('.blog__slider-btn_active') && (e.target.className === "blog__slider-btn" ||
    e.target.className === "blog__slider-btn blog__slider-btn_active")) {
    activeBtn = sliderScroll.querySelector('.blog__slider-btn_active')
    // removing active class
    activeBtn.classList.remove('blog__slider-btn_active');
    // adding active class
    e.target.classList.add('blog__slider-btn_active')
  }
}

function sliderHandler(data) {
  data.length === 1 ?
    sliderWrapper.children[1].classList.add('display-none') :
    sliderWrapper.children[1].classList.remove('display-none')
}

function btnDisabler() {
  DATA.length / sliderQuantity <= 3
    ? (sliderScroll.children[3].setAttribute("disabled", ""),
      sliderScroll.children[4].setAttribute("disabled", ""))
    : null
  DATA.length / sliderQuantity <= 4
    ? sliderScroll.children[4].setAttribute("disabled", "")
    : null
}


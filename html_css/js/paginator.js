let albumList = document.querySelector('.select__body')
let sliderScroll = document.querySelector('.blog__slider-scroll')
let sliderWrapper = document.querySelector('.blog__slider-wrapper')
let sliderCuantity = sliderWrapper.children.length
// let firstSlide = sliderWrapper.children[0]
// let secondSlide = sliderWrapper.children[1]
// let firstSlideTitle = firstSlide.querySelector('.slider-title')
// let secondSlideTitle = secondSlide.querySelector('.slider-title')
// let firstSlideImg = firstSlide.querySelector('.blog__slider-item-img')
// let secondSlideImg = secondSlide.querySelector('.blog__slider-item-img')

let buttonActive = 1

let DATA = [
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


// getting number of button clicked
sliderScroll.addEventListener('click', (event) => {
  event.target.className === "blog__slider-btn" || "blog__slider-btn blog__slider-btn_active"
    ? buttonActive = event.target.innerHTML
    : null
  getData(sliderCuantity, buttonActive)
  console.log(buttonActive)
})

function paginator(sliderWrapper, currentData) {
  currentData.forEach((element, i) => {
    sliderWrapper.children[i].querySelector('.slider-title').innerText = element.title
    sliderWrapper.children[i].querySelector('.blog__slider-item-img').src = element.url
  });
}

function getData(cuantity, btn) {
  console.log(currentData = DATA.slice(cuantity * btn - cuantity, cuantity * btn));
  paginator(sliderWrapper, currentData)
}

function activeBtnToggler() {
  console.log("sdsdsd")
}



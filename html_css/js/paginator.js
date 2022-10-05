let albumList = document.querySelector('.select__body')
let sliderScroll = document.querySelector('.blog__slider-scroll')
let sliderWrapper = document.querySelector('.blog__slider-wrapper')
let firstSlide = sliderWrapper.children[0]
let secondSlide = sliderWrapper.children[1]
let firstSlideTitle = firstSlide.querySelector('.slider-title')
firstSlideTitle.innerText = 'wwwwwwwwwwwwww'
console.log(firstSlideTitle.innerText)

let buttonClicked

let ImgData = [
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
let albumArr = []
let liArr = []
let li = document.createElement('li')

// getting number of button clicked
sliderScroll.addEventListener('click', (event) => {
  event.target.className === "blog__slider-btn" || "blog__slider-btn blog__slider-btn_active" ? buttonClicked = event.target.innerHTML : null
  console.log(buttonClicked)
})



function paginator(selector, ImgData) {
  let arr = []
  console.log(ImgData[0])
  ImgData.map((el) => {
    arr.push(el.albumId)
  })
  albumArr = [...new Set(arr)],
    console.log(albumArr)


  for (let i = 0; i < albumArr.length; i++) {

    li.classList.add('select__item');
    li.innerHTML = `Album ${i}`
    liArr.push(li)
    console.log(liArr)
    buildListAlbums()
  }
}




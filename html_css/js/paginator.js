
let albumList = document.querySelector('.select__body')
let ImgData = []
let albumArr = []
let liArr = []
let li = document.createElement('li')

getData()
function getData() {
  fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => ImgData = data)
    .then(() => paginator(albumList, ImgData))
}

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
  }
  buildListAlbums()
}


function buildListAlbums() {
  albumList.append(liArr)
  console.log(albumList)
}


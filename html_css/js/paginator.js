
let albumList = document.querySelector('.select__body')
let ImgData = []
let albumArr = []

fetch('https://jsonplaceholder.typicode.com/photos')
  .then(response => response.json())
  .then(data => ImgData = data)
  .then(() => console.log(ImgData))
  .then(() => paginator(albumList, ImgData))

function paginator(selector, ImgData) {
  let arr = []
  console.log(ImgData[0])

  ImgData.map((el) => {
    arr.push(el.albumId)
  })
  albumArr = [...new Set(arr)],
    console.log(albumArr)
}


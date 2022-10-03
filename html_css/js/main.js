let header = document.querySelector('.header')

console.log(header.clientHeight)

window.addEventListener('scroll', (event) => {
  console.log(window.scrollY)
  if (window.scrollY > header.clientHeight) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky')
  }
});
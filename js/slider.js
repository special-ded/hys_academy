export default class Slider {

  constructor(selector, data) {
    this.selector = selector;
    this.data = data;
  }

  slider = document.querySelector('#slider');
  sliderInner = document.createElement('div');

  slide
  leftArrow = document.createElement('button');
  rightArrow = document.createElement('button');


  initSlider() {
    this.displayInfo()
    this.processDataforSlides(this.data)
  }


  processDataforSlides(data) {
    this.sliderInner.classList.add('prefer__slider-inner')
    this.sliderInner.setAttribute("style", `width:${data.length * 218}px`);
    this.slider.setAttribute("style", `width:${data.length * 218}px`);


    this.leftArrow.classList.add('slider__arrow-btn')

    this.leftArrow.innerHTML = `<svg class="slider__arrow" viewBox="0 0 33 32" width="40">
    <use href="./assets/images/sprite.svg#icon-slide-left"></use>
    </svg>`

    this.slider.appendChild(this.leftArrow);

    this.slider.appendChild(this.sliderInner)


    data.forEach((slideData) => {
      this.renderTemplate(slideData);
    });

    this.rightArrow.classList.add('slider__arrow-btn')


    this.rightArrow.innerHTML = `<svg class="slider__arrow" viewBox="0 0 33 32" width="40">
    <use href="./assets/images/sprite.svg#icon-slide-right"></use>
  </svg>`

    this.slider.appendChild(this.rightArrow);

  }

  renderTemplate(slideData) {
    this.slide = document.createElement('div');
    console.log(this.slide);

    this.slide.classList.add('prefer__slider-slide');
    this.slide.innerHTML = `<img src=${slideData.url} alt="Graphic Design" width="198" />
    <div class="bg-position "></div>
    <p class="prefer__slider-text">${slideData.title.slice(0, 10)}</p>`

    this.sliderInner.appendChild(this.slide);
  }


  displayInfo() {
    console.log(this.selector, this.data)
  }

}





export default class CustomerSlider {
  buttons = document.querySelector('.customer__dots');
  activeButtonClass = "customer__dot_active";
  image = document.querySelector('.customers__img');
  firstText = document.querySelector('.customers__text-first');
  secondText = document.querySelector('.customers__text-second');

  constructor(selector, data) {
    this.selector = selector;
    this.data = data;
    this.slider = document.querySelector(this.selector);
    this.initSlider()
  }

  initSlider() {
    this.initEventListener()
  }

  initEventListener() {
    this.buttons.addEventListener('click', (e) => this.clickHandler(e))
  }

  clickHandler(event) {
    if (!event.target.value) {
      return
    }
    this.activeBtnToggler(event, this.activeButtonClass)
  }

  activeBtnToggler(event, activeButtonClass) {
    let activeBtn = document.querySelector(`.` + activeButtonClass);

    activeBtn.classList.remove(activeButtonClass);
    event.target.classList.add(activeButtonClass);
    this.renderImage(event.target.value)
    this.renderText(event.target.value)
  }

  renderImage(activeBtn) {
    this.image.src = this.data[activeBtn - 1].url
  }

  renderText(activeBtn) {
    this.firstText.innerText = this.data[activeBtn].title
    this.secondText.innerText = this.data[activeBtn].title
  }
}


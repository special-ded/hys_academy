export default class CustomerSlider {

  constructor(selector, data) {
    this.selector = selector;
    this.data = data;
    this.slider = document.querySelector(this.selector);
    this.buttons = document.querySelector('.customer__dots');
    this.activeButtonClass = "customer__dot_active";
  }

  initSlider() {
    console.log(this.slider, this.buttons, this.data);

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

    console.log(event.target.value)
  }

  activeBtnToggler(e, activeButtonClass) {
    let activeBtn = document.querySelector(`.` + activeButtonClass);
    console.log(activeBtn);

    activeBtn = document.querySelector(`.` + activeButtonClass);
    activeBtn.classList.remove(activeButtonClass);
    e.target.classList.add(activeButtonClass);

  }

}


export default class Storage {
  constructor() {
  }

  getSliderData() {
    this.checkLocalStorage()
    this.setFormLocalStorage()
    return this.data = JSON.parse(localStorage.getItem('localStorageSliderData'))

  }

  checkLocalStorage() {
    this.formUserName = localStorage.getItem('username')?.trim()
    this.formTelephone = localStorage.getItem('telephone')?.trim()
    this.formEmail = localStorage.getItem('email')?.trim()

    this.formUserName || this.formTelephone || this.formEmail
      ? console.log('aaaaaaaa')
      : console.log('bbbbbb')
  }

  setFormLocalStorage() {
    document.querySelector('form').addEventListener('input', (event) =>

      this.inputHandler(event)
    )
  }

  getFormLocalStorage() {


  }

  inputHandler(event) {
    console.log(event.target.value);
    localStorage.setItem(event.target.id, JSON.stringify(event.target.value));
  }
}








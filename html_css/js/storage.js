export default class Storage {
  constructor() {
  }
  getSliderData() {
    return this.data = JSON.parse(localStorage.getItem('localStorageSliderData'))
  }
}








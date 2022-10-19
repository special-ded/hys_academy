/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/slider.js":
/*!**********************!*\
  !*** ./js/slider.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Slider)\n/* harmony export */ });\nclass Slider {\n  constructor(selector, data) {\n    this.selector = selector;\n    this.data = data;\n  }\n  initSlider() {\n    this.slider = document.querySelector(this.selector);\n    this.processDataForSlides(this.data);\n    this.initIventListener();\n    this.page = 0;\n    this.buttonHandler(this.page);\n    this.changeSlidesQuantity();\n  }\n  renderButtons(buttonSide) {\n    this.button = document.createElement('button');\n    this.button.classList.add('slider__arrow-btn');\n    this.button.innerHTML = this.getButtonTemplate(buttonSide);\n    this.slider.appendChild(this.button);\n  }\n  getButtonTemplate(buttonSide) {\n    return `<svg class=\"slider__arrow arrow-${buttonSide}\" viewBox=\"0 0 33 32\" width=\"40\">\n      <use class=\"arrow-${buttonSide}\" href=\"./assets/images/sprite.svg#icon-slide-${buttonSide}\"></use>\n      </svg>`;\n  }\n  initIventListener() {\n    this.slider.addEventListener('click', event => {\n      this.isButtonClass(event) ? this.clickHandler(event) : null;\n    });\n    window.addEventListener('resize', () => this.changeSlidesQuantity());\n  }\n  isButtonClass(event) {\n    this.buttonClasses = ['arrow-left', 'arrow-right'];\n    this.buttonClassName = event.target.className.baseVal;\n    return this.buttonClasses.includes(this.buttonClassName);\n  }\n  clickHandler(event) {\n    this.maxPage = this.data.length - this.slidesShown;\n    console.log(this.slidesShown);\n    if (event.target.className.baseVal === 'arrow-right') {\n      ++this.page;\n      this.slidesInner.setAttribute('style', `transform: translateX(-${this.page * 217}px)`);\n      this.buttonHandler(this.page);\n      return;\n    }\n    if (event.target.className.baseVal === 'arrow-left') {\n      --this.page;\n      this.slidesInner.setAttribute('style', `transform: translateX(-${this.page * 217}px)`);\n      this.buttonHandler(this.page);\n      return;\n    }\n  }\n  buttonHandler(page) {\n    this.arrowParent = [...document.querySelectorAll('.slider__arrow-btn')];\n    this.arrowLeft = this.arrowParent.find(el => el.children[0].className.baseVal === 'slider__arrow arrow-left');\n    page === 0 ? this.arrowLeft.disabled = true : this.arrowLeft.disabled = false;\n    page >= this.maxPage ? this.button.disabled = true : this.button.disabled = false;\n    console.log(page);\n    console.log(this.maxPage);\n  }\n  processDataForSlides(data) {\n    this.slidesInner = document.createElement('div');\n    this.slidesWrapper = document.createElement('div');\n    this.renderButtons('left');\n    this.slidesWrapper.classList.add('prefer__slides-wrapper');\n    this.slider.appendChild(this.slidesWrapper);\n    this.slidesInner.classList.add('prefer__slides-inner');\n    this.slidesWrapper.appendChild(this.slidesInner);\n    data.forEach(slideData => {\n      this.renderTemplate(slideData);\n    });\n    this.renderButtons('right');\n  }\n  renderTemplate(slideData) {\n    this.slide = document.createElement('div');\n    this.slide.classList.add('prefer__slider-slide');\n    this.slide.innerHTML = this.getSlideTemplate(slideData);\n    this.slidesInner.appendChild(this.slide);\n  }\n  getSlideTemplate(slideData) {\n    return `<img src=${slideData.url} alt=\"Graphic Design\" width=\"198\" />\n    <div class=\"bg-position \"></div>\n    <p class=\"prefer__slider-text\">${slideData.title.slice(0, 10)}</p>`;\n  }\n  changeSlidesQuantity() {\n    if (window.innerWidth < 620) {\n      this.slider.style.maxWidth = '338px';\n      this.slidesShown = 1;\n      return;\n    }\n    if (window.innerWidth < 800) {\n      this.slider.style.maxWidth = '554px';\n      this.slidesShown = 2;\n      return;\n    }\n    if (window.innerWidth < 1020) {\n      this.slider.style.maxWidth = '768px';\n      this.slidesShown = 3;\n      return;\n    }\n    if (window.innerWidth > 1020) {\n      this.slider.style.maxWidth = '990px';\n      this.slidesShown = 4;\n      return;\n    }\n  }\n}\n\n//# sourceURL=webpack://my-web-pack-bundler/./js/slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/slider.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;
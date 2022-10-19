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

/***/ "./js/paginator.js":
/*!*************************!*\
  !*** ./js/paginator.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ paginator)\n/* harmony export */ });\nconst sliderScroll = document.querySelector('.blog__slider-scroll');\nlet sliderWrapper = '';\nconst buttonClassName = \"blog__slider-btn\";\nfunction paginator(selector, data) {\n  sliderWrapper = document.querySelector(selector);\n  const slidesQuantity = 2;\n  const activeButtonNumber = 1;\n  if (data.length > 2) {\n    renderButtons(data);\n  }\n  initClickListener(slidesQuantity, data);\n  updateData(slidesQuantity, activeButtonNumber, data);\n  checkTranslateProperty();\n}\nfunction isButtonClass(event) {\n  const buttonClasses = [...event.target.classList];\n  return buttonClasses.includes(buttonClassName);\n}\nfunction initClickListener(slidesQuantity, data) {\n  sliderScroll.addEventListener('click', clickHandler.bind(this, slidesQuantity, data));\n}\nfunction clickHandler(slidesQuantity, data, event) {\n  let activeButtonNumber = 0;\n  if (isButtonClass(event)) {\n    activeButtonNumber = event.target.innerHTML;\n    activeBtnToggler(event);\n    updateData(slidesQuantity, activeButtonNumber, data);\n    buttonScrollHandler(activeButtonNumber, data);\n  }\n}\nfunction updateData(slidesQuantity, activeButtonNumber, data) {\n  const currentData = data.slice(slidesQuantity * activeButtonNumber - slidesQuantity, slidesQuantity * activeButtonNumber);\n  renderNewSlides(currentData);\n}\nfunction removeAllChildNodes(parent) {\n  while (parent.firstChild) {\n    parent.removeChild(parent.firstChild);\n  }\n}\nfunction checkTranslateProperty() {\n  return window.innerWidth < 769 ? \"translateX\" : \"translateY\";\n}\nfunction buttonScrollHandler(activeButtonNumber, data) {\n  const sliderScrollWrap = document.querySelector('.blog__slider-scroll-wrap');\n  const translateProperty = checkTranslateProperty();\n  if (activeButtonNumber <= 3) {\n    sliderScrollWrap.setAttribute(\"style\", `transform: ${translateProperty}(-0px)`);\n    return;\n  }\n  if (activeButtonNumber > 3 && activeButtonNumber <= Math.round(data.length / 2) - 2) {\n    sliderScrollWrap.setAttribute(\"style\", `transform: ${translateProperty}(-${62 * (activeButtonNumber - 3)}px)`);\n    return;\n  }\n  if (activeButtonNumber == Math.round(data.length / 2) - 1) {\n    sliderScrollWrap.setAttribute(\"style\", `transform: ${translateProperty}(-${62 * (activeButtonNumber - 4)}px)`);\n    return;\n  }\n}\nfunction renderButtons(data) {\n  const sliderScrollWrap = document.createElement('div');\n  const activeButton = document.createElement('button');\n  sliderScrollWrap.classList.add('blog__slider-scroll-wrap');\n  sliderScroll.appendChild(sliderScrollWrap);\n  activeButton.classList.add('blog__slider-btn');\n  activeButton.classList.add('blog__slider-btn_active');\n  activeButton.innerText = 1;\n  sliderScrollWrap.appendChild(activeButton);\n  for (let i = 0; i < data.length / 2 - 1; i++) {\n    const button = document.createElement('button');\n    button.classList.add('blog__slider-btn');\n    button.innerText = i + 2;\n    sliderScrollWrap.appendChild(button);\n  }\n}\nfunction renderTemplate(slideData) {\n  const slide = document.createElement('div');\n  slide.classList.add('blog__slider-item');\n  slide.innerHTML = getSlideTemplate(slideData);\n  sliderWrapper.appendChild(slide);\n  smoothRendering(slide);\n}\nfunction getSlideTemplate(slideData) {\n  return `\n    <div class=\"blog__slider-item-bg\" ></div>\n    <img class=\"blog__slider-item-img\" src =${slideData.url} alt = \"Blog image\" />\n    <p class=\"blog__item-side-text\">${slideData.category}</p>\n    <div class=\"blog__slider-title\">\n      <img class=\"blog__slider-user-img\" src=${slideData.userImage} width=\"48\" height=\"48\" alt=\"slider img1 small\" />\n      <h3 class=\"slider-title\">${slideData.title}</h3>\n    </div>\n    <a class=\"blog__item_link\" href=${slideData.redirectLink}>Read Now</a>`;\n}\nfunction smoothRendering(slide) {\n  slide.classList.add('opacity');\n  setTimeout(() => {\n    slide.classList.remove('opacity');\n  }, 200);\n}\nfunction renderNewSlides(currentData) {\n  removeAllChildNodes(sliderWrapper);\n  currentData.forEach(slideData => {\n    renderTemplate(slideData);\n  });\n}\nfunction activeBtnToggler(e) {\n  let activeBtn = sliderScroll.querySelector('.blog__slider-btn_active');\n  if (isButtonClass(e)) {\n    activeBtn = sliderScroll.querySelector('.blog__slider-btn_active');\n    activeBtn.classList.remove('blog__slider-btn_active');\n    e.target.classList.add('blog__slider-btn_active');\n  }\n}\n\n//# sourceURL=webpack://my-web-pack-bundler/./js/paginator.js?");

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
/******/ 	__webpack_modules__["./js/paginator.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;
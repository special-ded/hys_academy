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

/***/ "./js/drop-down-menu.js":
/*!******************************!*\
  !*** ./js/drop-down-menu.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ preferDropDown)\n/* harmony export */ });\nfunction preferDropDown() {\n  let iconToggle = false;\n  initEventListeners();\n  function initEventListeners() {\n    const selectItem = document.querySelectorAll('.select__item');\n    selectItem.forEach(item => {\n      item.addEventListener('click', selectChoose);\n    });\n    document.querySelector(\".select\").addEventListener('click', event => {\n      const classListInput = [\"input__value\", \"input__wrap\", \"paginator__icon-use\", \"paginator__icon\"];\n      if (classListInput.includes(event.target.className) || classListInput.includes(event.target.classList.value)) {\n        selectToggler();\n      }\n    });\n  }\n  function selectToggler() {\n    const dropDownMenu = document.querySelector('.select');\n    iconToggler();\n    dropDownMenu.classList.toggle('is-active');\n  }\n  function selectChoose() {\n    iconToggler();\n    let text = this.innerText,\n      select = this.closest('.select'),\n      currentText = select.querySelector('.input__value');\n    currentText.value = text;\n    select.classList.remove('is-active');\n  }\n  function iconToggler() {\n    const paginatorIconLink = document.getElementsByClassName(\"paginator__icon-use\");\n    if (iconToggle == false) {\n      paginatorIconLink[0].setAttribute('href', \"./assets/images/sprite.svg#icon-arrow-active\");\n    } else {\n      paginatorIconLink[0].setAttribute('href', \"./assets/images/sprite.svg#icon-arrow-default\");\n    }\n    iconToggle = !iconToggle;\n  }\n}\n;\n\n//# sourceURL=webpack://my-web-pack-bundler/./js/drop-down-menu.js?");

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
/******/ 	__webpack_modules__["./js/drop-down-menu.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;
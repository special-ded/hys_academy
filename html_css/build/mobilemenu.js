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

/***/ "./js/mobile-menu.js":
/*!***************************!*\
  !*** ./js/mobile-menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMobileMenu)\n/* harmony export */ });\nfunction initMobileMenu() {\n  let menuOpen = false;\n  initEventListener();\n  closeIfResize();\n  function initEventListener() {\n    const header = document.querySelector('#header');\n    header.addEventListener('click', clickHandler);\n  }\n  function clickHandler(e) {\n    if (e.target.className === \"menu__elem-item\" || e.target.className.animVal === \"burger__icon-cross\" || e.target.className.animVal === \"burger__icon\") {\n      menuToggler();\n    }\n  }\n  function menuToggler() {\n    const mobileMenu = document.querySelector('.mobile__menu');\n    mobileMenu.classList.toggle('mobile__menu_active');\n    scrollStopTimeOut();\n  }\n  function scrollStopTimeOut() {\n    setTimeout(() => {\n      document.querySelector('body').classList.toggle('stop-scroll');\n    }, 300);\n    menuOpen = !menuOpen;\n  }\n  function closeIfResize() {\n    window.addEventListener('resize', function () {\n      if (window.innerWidth > 767 && menuOpen === true) {\n        menuToggler();\n      }\n    });\n  }\n}\n\n//# sourceURL=webpack://my-web-pack-bundler/./js/mobile-menu.js?");

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
/******/ 	__webpack_modules__["./js/mobile-menu.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;
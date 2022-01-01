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

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ \"./assets/js/main.js\");\n\n// Declaration des variables\nlet donnees,apprenants = []\nlet idSave = 0\n\n// recuperation des donnees du formulaire\ndocument.querySelector('#form'),addEventListener('submit',(e)=>{\n    e.preventDefault()\n    console.log();\n\n    donnees = (0,_main_js__WEBPACK_IMPORTED_MODULE_0__.resuperationDonnees)()\n    ;(0,_main_js__WEBPACK_IMPORTED_MODULE_0__.carte)(donnees)\n    document.querySelector('#form').reset()\n    apprenants.push(donnees)\n    // localStorage\n    // apprenantsLocal = localStorage;\n    localStorage.setItem(idSave,JSON.stringify(donnees))\n    idSave++\n        console.log(apprenants);\n})\n\n// Saisie TexteArea\nconst textArea = document.querySelector('.bio-form');\ntextArea.addEventListener('input',_main_js__WEBPACK_IMPORTED_MODULE_0__.saisiTextArea)\n\n\n//# sourceURL=webpack://application-school/./assets/js/app.js?");

/***/ }),

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"resuperationDonnees\": () => (/* binding */ resuperationDonnees),\n/* harmony export */   \"saisiTextArea\": () => (/* binding */ saisiTextArea),\n/* harmony export */   \"carte\": () => (/* binding */ carte)\n/* harmony export */ });\n// Recuperation de donnees  \nfunction resuperationDonnees()\n{\n    const nom = document.querySelector(\".nom\").value\n    const prenom = document.querySelector(\".prenom\").value\n    const bio = document.querySelector(\".bio\").value\n    const niveau = document.querySelector(\".niveau\").value\n    const maquette = document.querySelector(\".maquette\").value\n    const pageStatique = document.querySelector(\".pageStatique\").value\n    const pageDynamique = document.querySelector(\".pageDynamique\").value\n    const backEnd = document.querySelector(\".backEnd\").value\n\n    let apprenant = {\n        nom,\n        prenom,\n        bio,\n        niveau,\n        maquette,\n        pageStatique,\n        pageDynamique,\n        backEnd\n    }\n    return apprenant\n}\n\n//  Evennement de textArea\nfunction saisiTextArea(e){\ne.preventDefault();\n    const textArea = document.querySelector('.bio-form');\n    const nbrRestant = document.querySelector('.nbr-restant');\n    const contenuRestant = document.querySelector('.contenu-restant');\n    const longueurMax = 130\n    let longueurSaisi = textArea.value\n    nbrRestant.innerHTML = longueurMax - longueurSaisi.length\n\n    if(nbrRestant.innerHTML > 16)\n    {\n        contenuRestant.style.color = \"black\"\n        document.querySelector('#submit').disabled = false\n    }\n    \n    if(nbrRestant.innerHTML <= 16)\n    {\n        contenuRestant.style.color = \"yellow\"\n        document.querySelector('#submit').disabled = false\n\n        if(nbrRestant.innerHTML <= 0)\n        {\n        contenuRestant.style.color = \"red\"\n        document.querySelector('#submit').disabled = true\n        }\n    }\n}  \n\nlet id = 0\n// Creer carte\nfunction carte(apprenant){\n    document.querySelector('.listeCarte').insertAdjacentHTML(\n    \"beforeend\",\n    `\n            <div class=\"card mb-3\" id=\"${id}\">\n                <img src=\"...\" class=\"card-img-top\" alt=\"...\">\n\n                <div class=\"card-body\">\n                    <div class=\"d-flex\">\n                        <h5 class=\"card-title mx-2\">${apprenant.prenom}</h5>\n                        <h5 class=\"card-title\">${apprenant.nom}</h5>\n                    </div>\n                    <p class=\"card-text\">${apprenant.bio}.</p>\n                </div>\n\n                <div class=\"card-footer d-flex justify-content-between\">\n                    <small class=\"text-muted\">${apprenant.niveau}</small>\n                    <div>\n                        <button class=\"modification btn btn-success\">Modifier</button>\n                        <button class=\"suppression btn btn-danger\">Supprimer</button>\n                    </div>\n                </div>\n\n            </div>\n    `\n    )\n    id++\n}\n\n//# sourceURL=webpack://application-school/./assets/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/js/app.js");
/******/ 	
/******/ })()
;
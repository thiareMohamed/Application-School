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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ \"./assets/js/main.js\");\n/* harmony import */ var _supabase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supabase.js */ \"./assets/js/supabase.js\");\n\n\n\n// Declaration des variables\nlet donnees,apprenants = []\nlet idSave = JSON.parse(localStorage.getItem(\"id\"))\n\n\nif(localStorage.getItem(\"id\") == null)\n{\n    idSave = 0\n}\nif(localStorage)\n{\n    CreerCarte();\n}\n\n// fonction Creer carte\nfunction CreerCarte(){\n    document.querySelector(\".btnmodification\").style.visibility = \"hidden\"\n    let key = localStorage.length \n    for (let i = 0; i < key-1; i++)\n    { \n        let apprenants = JSON.parse(localStorage.getItem(i));\n        (0,_main_js__WEBPACK_IMPORTED_MODULE_0__.carte)(apprenants);\n    }\n}\n\n\n// recuperation des donnees du formulaire\ndocument.querySelector('#form .ajouter'),addEventListener('submit',(e)=>{\n    e.preventDefault()\n    donnees = (0,_main_js__WEBPACK_IMPORTED_MODULE_0__.resuperationDonnees)()\n    ;(0,_main_js__WEBPACK_IMPORTED_MODULE_0__.carte)(donnees)\n    document.querySelector('#form').reset()\n    apprenants.push(donnees)\n\n    // localStorage\n    localStorage.setItem(idSave,JSON.stringify(donnees))\n    idSave++\n    localStorage.setItem(\"id\",idSave)\n})\n\n// Saisie TexteArea\nconst textArea = document.querySelector('.bio-form');\ntextArea.addEventListener('input',_main_js__WEBPACK_IMPORTED_MODULE_0__.saisiTextArea)\n\n// Sauvegarder contenus\ndocument.querySelector(\".sauvegarder\").addEventListener('click',()=>{\n    if(localStorage.length == 0)\n    {\n        alert('Ajouter un apprenant')\n        return\n    }\n    else\n    {\n        for(let i = 0; i <= localStorage.length - 2; i++)\n        {\n            (0,_supabase_js__WEBPACK_IMPORTED_MODULE_1__.enregistrer)(localStorage[i])\n        }\n        \n        const cartes = document.querySelector(\".listeCarte\");\n        while (cartes.hasChildNodes()) {\n            cartes.removeChild(cartes.firstChild);\n        } \n        localStorage.clear()\n        idSave = 0\n    }\n})\n\n// Range competence\nconst maquette = document.querySelector('.maquette')\nconst statique = document.querySelector('.pageStatique')\nconst dynamique = document.querySelector('.pageDynamique')\nconst backEnd = document.querySelector('.backEnd')\n\nmaquette.addEventListener('input',()=>{\n    document.querySelector('#mq').innerHTML = maquette.value\n})\nstatique.addEventListener('input',()=>{\n    document.querySelector('#ps').innerHTML = statique.value\n})\ndynamique.addEventListener('input',()=>{\n    document.querySelector('#pd').innerHTML = dynamique.value\n})\nbackEnd.addEventListener('input',()=>{\n    document.querySelector('#be').innerHTML = backEnd.value\n})\n\n//# sourceURL=webpack://application-school/./assets/js/app.js?");

/***/ }),

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"resuperationDonnees\": () => (/* binding */ resuperationDonnees),\n/* harmony export */   \"saisiTextArea\": () => (/* binding */ saisiTextArea),\n/* harmony export */   \"carte\": () => (/* binding */ carte)\n/* harmony export */ });\n// Recuperation de donnees  \nfunction resuperationDonnees()\n{\n    const nom = document.querySelector(\".nom\").value\n    const prenom = document.querySelector(\".prenom\").value\n    const bio = document.querySelector(\".bio\").value\n    const niveau = document.querySelector(\".niveau\").value\n    const maquette = document.querySelector(\".maquette\").value\n    const pageStatique = document.querySelector(\".pageStatique\").value\n    const pageDynamique = document.querySelector(\".pageDynamique\").value\n    const backEnd = document.querySelector(\".backEnd\").value\n\n    let apprenant = {\n        nom,\n        prenom,\n        bio,\n        niveau,\n        maquette,\n        pageStatique,\n        pageDynamique,\n        backEnd\n    }\n    return apprenant\n}\n\n//  Evennement de textArea\nfunction saisiTextArea(e){\ne.preventDefault();\n    const textArea = document.querySelector('.bio-form');\n    const nbrRestant = document.querySelector('.nbr-restant');\n    const contenuRestant = document.querySelector('.contenu-restant');\n    const longueurMax = 130\n    let longueurSaisi = textArea.value\n    nbrRestant.innerHTML = longueurMax - longueurSaisi.length\n\n    if(nbrRestant.innerHTML > 16)\n    {\n        contenuRestant.style.color = \"black\"\n        document.querySelector('#submit').disabled = false\n    }\n    \n    if(nbrRestant.innerHTML <= 16)\n    {\n        contenuRestant.style.color = \"yellow\"\n        document.querySelector('#submit').disabled = false\n\n        if(nbrRestant.innerHTML <= 0)\n        {\n        contenuRestant.style.color = \"red\"\n        document.querySelector('#submit').disabled = true\n        }\n    }\n}  \n\n// Creer carte\nlet id = 0\nfunction carte(apprenant){\n    document.querySelector('.listeCarte').insertAdjacentHTML(\n    \"beforeend\",\n    `\n            <div class=\"card-${id} mb-3\">\n                <img src=\"./assets/img/profil.png\" style=\"width: 150px;\" class=\"p-2 card-img-top\" alt=\"...\">\n\n                <div class=\"card-body\">\n                    <div class=\"d-flex\">\n                        <h5 class=\"card-title mx-2\">${apprenant.prenom}</h5>\n                        <h5 class=\"card-title\">${apprenant.nom}</h5>\n                    </div>\n                    <p class=\"card-text\">${apprenant.bio}.</p>\n                </div>\n\n                <div class=\"card-footer d-flex justify-content-between\">\n                    <small class=\"text-muted\">${apprenant.niveau}</small>\n                    <div>\n                        <button class=\"modification btn btn-success\" id=\"${id}\">Modifier</button>\n                        <button class=\"suppression btn btn-danger\" id=\"${id}\">Supprimer</button>\n                    </div>\n                </div>\n\n            </div>\n    `\n    )\n    // Suppression\n    let bouttonSupprimer = document.querySelectorAll(\".suppression\")\n    for(let btnsup of bouttonSupprimer)\n    {\n        btnsup.addEventListener('click',()=>{\n            supprimer(btnsup.id)  \n        })\n    }\n\n    // Modification\n    let bouttonModifier = document.querySelectorAll(\".modification\")\n    for(let btnmodif of bouttonModifier)\n    {\n        btnmodif.addEventListener('click',()=>{\n            modifier(btnmodif.id)  \n        })\n    }\n    id++\n}\n\n// suppression\nfunction supprimer(id)\n{\n    localStorage.removeItem(id);\n    console.log(id);\n    document.querySelector(`.card-${id}`).remove()\n}\n// modification\nfunction modifier(id)\n{\n    let classModifier = JSON.parse(localStorage.getItem(id))\n    document.querySelector(\".nom\").value = classModifier.nom\n    document.querySelector(\".prenom\").value = classModifier.prenom\n    document.querySelector(\".bio\").value = classModifier.bio\n    document.querySelector(\".niveau\").value = classModifier.niveau\n    document.querySelector(\".maquette\").value = classModifier.maquette\n    document.querySelector(\".pageStatique\").value = classModifier.pageStatique\n    document.querySelector(\".pageDynamique\").value = classModifier.pageDynamique\n    document.querySelector(\".backEnd\").value = classModifier.backEnd\n\n    document.querySelector(\"#submit\").style.visibility = \"hidden\"\n    document.querySelector(\".btnmodification\").style.visibility = \"visible\"\n    \n\n    document.querySelector(\".btnmodification\").addEventListener('click',()=>{\n        const carte = document.querySelector(`.card-${id}`)\n        carte.remove()\n        const nom = document.querySelector(\".nom\").value\n        const prenom = document.querySelector(\".prenom\").value\n        const bio = document.querySelector(\".bio\").value\n        const niveau = document.querySelector(\".niveau\").value\n        const maquette = document.querySelector(\".maquette\").value\n        const pageStatique = document.querySelector(\".pageStatique\").value\n        const pageDynamique = document.querySelector(\".pageDynamique\").value\n        const backEnd = document.querySelector(\".backEnd\").value\n    \n        let apprenant = {\n            nom,\n            prenom,\n            bio,\n            niveau,\n            maquette,\n            pageStatique,\n            pageDynamique,\n            backEnd\n        }\n        localStorage.setItem(id,JSON.stringify(apprenant))\n        document.querySelector(\"#submit\").style.visibility = \"visible\"\n        document.querySelector(\".btnmodification\").style.visibility = \"hidden\"\n        localStorage.removeItem(id);\n    })\n}\n\n//# sourceURL=webpack://application-school/./assets/js/main.js?");

/***/ }),

/***/ "./assets/js/supabase.js":
/*!*******************************!*\
  !*** ./assets/js/supabase.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Affichage\": () => (/* binding */ Affichage),\n/* harmony export */   \"enregistrer\": () => (/* binding */ enregistrer)\n/* harmony export */ });\nconst key_api = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTEyMzgzNCwiZXhwIjoxOTU2Njk5ODM0fQ.CaY8LCXUQE8ZoArvqJTksbTYAk5JHSB30YtHYB1pMlM\"\nconst url_api = \"https://gpyxjxqhqhxkpmjjlruz.supabase.co/rest/v1/Apprenant\"\n\n// Affichage\nfunction Affichage(carte)\n{\n    fetch(url_api,{\n        method:\"GET\",\n        headers:{\n            apikey: key_api,\n        },\n    })\n    .then((apprenants) => apprenants.json())\n    .then((apprenants) => {\n        // Afficher les donnees\n        for (let apprenant of apprenants)\n        {\n            carte(apprenant)\n        }\n    })\n}\n\n// Enregistrement\nfunction enregistrer(donnees)\n{\n    fetch(url_api, {\n        method: \"POST\",\n        headers: {\n          apikey: key_api,\n          \"Content-Type\": \"application/json\",\n        },\n        body: donnees,\n      });\n      console.log(\"Bien enregistrer !\");\n}\n\n//# sourceURL=webpack://application-school/./assets/js/supabase.js?");

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
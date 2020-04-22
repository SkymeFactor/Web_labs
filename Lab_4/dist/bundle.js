/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/App.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/About.js":
/*!**********************!*\
  !*** ./src/About.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst AboutPage = {\n    async render() {\n        let bt1 = document.getElementById(\"button1\")\n        let bt2 = document.getElementById(\"button2\")\n        bt1.classList.add('chosen') & bt2.classList.remove('chosen');\n\n        let view = `\n            <h2 id=\"page-title\" class=\"spa-title\" style=\"font-size: 28pt\">About</h2>\n            <div class=\"wrapper\" style=\"display: inline-flex; justify-content: center\">\n                <img src=\"/img/pic.png\" style=\"width: 200px; height: 200px; border-radius : 50%; border: solid 2px\">\n                <div class=\"wrapper2\" style=\"display: block;\">\n                    <ul style=\"list-style-type: none; padding-inline-start: 60px; font-size: 15pt;\">\n                        <li style=\"margin-bottom: 15px\"><b>First Name: </b></b><span style=\"margin-left: 20px;\">Sergei</span></li>\n                        <li style=\"margin-bottom: 15px\"><b>Last Name: </b><span style=\"margin-left: 23px;\">Vlad</span></li>\n                        <li style=\"margin-bottom: 15px\"><b>Group: </b><span style=\"margin-left: 61px;\">M3307</span></li>\n                        <li style=\"margin-bottom: 15px\"><b>Age: </b><span style=\"margin-left: 87px;\">21</span></li>\n                    </ul>\n                </div>\n            </div>\n        `\n        return view;\n    },\n\n    async after_render() {}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AboutPage);\n\n//# sourceURL=webpack:///./src/About.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _About_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About.js */ \"./src/About.js\");\n/* harmony import */ var _PokeApi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PokeApi.js */ \"./src/PokeApi.js\");\n\n\n\n// This is used for routing over tabs\n\nconst routes = {\n    'about': _About_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    'pokeapi': _PokeApi_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}\n\n// Routing handler, rendering page \n\nconst handler = async () => {\n    const content =  false || document.getElementById('content');\n    let url = window.location.href.toString().toLowerCase();\n    let parsedURL = url.split('/')[4];\n    let page = routes[parsedURL] ? routes[parsedURL] : \"Error 404\";\n\n    if (page === \"Error 404\"){\n        content.innerHTML = `<h2>Error 404: page not found</h2>`;\n        throw new Error(\"Error 404: page not found\");\n    } else {\n        content.innerHTML = await page.render();\n        page.after_render();\n    }\n}\n\nwindow.addEventListener(\"load\", () => {\n\n    // On the page load we manually construct the URL in order to\n    // prevent some of possible errors with it.\n\n    let url = window.location.href.toString().toLowerCase();\n    let parsedURL = url.split('/');\n    let addr = parsedURL[0];\n    let length = 0;\n    while (parsedURL[length] != 'lab_4.html') {\n        length++;\n    }\n    length++;\n\n    if (!routes[parsedURL[length]]) {\n        for (let i = 1; i < length; i++) {\n            addr += '/' + parsedURL[i]\n        }\n        window.location = addr + '#/about'\n    }\n    else handler();\n\n});\n\n//In case of changing the url we are taking control over it\n\nwindow.addEventListener(\"hashchange\", handler);\n\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/PokeApi.js":
/*!************************!*\
  !*** ./src/PokeApi.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst PokeAPI = {\n    async render() {\n        document.getElementById('content').innerHTML = \"<p style='margin-top: 20%; text-align: center;'>Loading...</p>\"\n\n        let bt1 = document.getElementById(\"button1\")\n        let bt2 = document.getElementById(\"button2\")\n        bt2.classList.add('chosen') & bt1.classList.remove('chosen')\n\n        let view = '<h2 id=\"page-title\" class=\"spa-title\" style=\"font-size: 28pt\">'\n        async function GetPoke () {\n            let randId = Math.floor(Math.random() * 807);\n            let url = 'https://pokeapi.co/api/v2/pokemon/' + randId.toString() + '/'\n            const pokemon = await fetch(url, {\n                method: 'GET'\n            }).then(response => {\n                return response.json();\n            });\n\n            console.log(`Pokemon ${pokemon.name}:`, pokemon)\n            \n            let ability = new Array();\n            for (let i = 0; i < pokemon.abilities.length; i++){\n                let url = pokemon.abilities[i].ability.url;\n                ability[i] = await fetch(url, {\n                    method: 'GET'\n                }).then(response => {\n                    return response.json();\n                })\n                console.log(`Ability[${i}]:`, ability[i])\n            }\n\n            return {pokemon: pokemon, abilities: ability}\n        }\n        \n        let pokemon = GetPoke().then(response => {return response});\n        view += (await pokemon).pokemon.name[0].toUpperCase() + (await pokemon).pokemon.name.slice(1) + \"</h2>\"\n        for (let i = 0; i < (await pokemon).abilities.length; i++){\n            view += \"<h3 class='header_three'>\" + (await pokemon).abilities[i].name[0].toUpperCase() + (await pokemon).abilities[i].name.slice(1) + \"</h3>\";\n            for (let j = 0; j < (await pokemon).abilities[i].effect_entries.length; j++)\n            view += \"<p class='paragraph'>\" + (await pokemon).abilities[i].effect_entries[j].effect + \"</p>\";\n        }\n\n        return view;\n    },\n\n    async after_render() {\n        let p = document.getElementsByClassName(\"paragraph\");\n        for (let par of p) {\n            par.style.marginLeft = '20%';\n            par.style.width = '60%';\n        }\n        let head = document.getElementsByClassName(\"header_three\")\n        for (let h of head) {\n            h.style.marginLeft = '20%';\n            h.style.width = 'fit-content';\n            h.style.borderBottom = 'solid steelblue 2px';\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PokeAPI);\n\n//# sourceURL=webpack:///./src/PokeApi.js?");

/***/ })

/******/ });
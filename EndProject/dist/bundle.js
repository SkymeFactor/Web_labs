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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/auth.js":
/*!*********************!*\
  !*** ./src/auth.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst auth = {\n    requireToken() {\n        const init = {\n            authLink: 'https://oauth.vk.com/authorize',\n            clientId: '7475134',\n            displayType: 'page',\n            scope: 'photos',\n            redirectURI: 'https://skymefactor.github.io/Web_labs/EndProject/index.html',//'file:///home/skyme/Documents/Web_labs/EndProject/index.html',\n            responseType: 'token',\n            v: 'v=5.52'\n        }\n        let url = init.authLink + '?client_id=' + init.clientId\n        url += '&display=' + init.displayType\n        url += '&redirect_uri=' + init.redirectURI\n        url += '&scope=' + init.scope\n        url += '&response_type=' + init.responseType\n        url += '&v=' + init.v\n        //this.url = init.redirectURI + '#access_token=2348c995ff33a38390d5fe6d7ccd7d1a575252a6e902a36e8b689bfc22fd3f76d89304211d7763bb72228&expires_in=86400&user_id=163781571&state=123456'\n        console.log(url)\n        sessionStorage.setItem('key_requested', true)\n        window.location = url\n    },\n    parse_url() {\n        const result_url = window.location.href.toString();\n        console.log(result_url)\n        const hashURL = result_url.split('#')[1];\n        let result = []\n        result.push(hashURL.split('=')[1].split('&')[0])\n        console.log(hashURL)\n        result.push(hashURL.split('&')[2].split('=')[1])\n        console.log(result[0])\n        console.log(result[1])\n\n        return result\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (auth);\n\n//https://oauth.vk.com/authorize?client_id=5490057&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=friends&response_type=token&v=5.52\n\n/*let url = init.authLink + '?client_id=' + init.clientId\nurl += '&display=' + init.displayType\nurl += '&' + init.redirectURI\nurl += '&scope=' + init.scope\nurl += '&response_type' + init.responseType*/\n\n\n//'https://oauth.vk.com/authorize?client_id=163781571&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=photos&response_type=token'\n\n\n\n\n//# sourceURL=webpack:///./src/auth.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth */ \"./src/auth.js\");\n\n\nlet access_token = ''\nlet user_id = ''\n\nif (sessionStorage.getItem('key_requested') === null){\n    _auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"].requireToken();\n} else {\n    let result = _auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"].parse_url();\n    access_token = result[0]\n    user_id = result[1]\n\n}\n\n/*import Vue from \"vue\";\nApp = require(\"./App.vue\");\n\nfunction drawPics(pics) {\n    html = ''\n    for (pic in pics){\n        var t = pics[pic]\n        html +=\n            '<li>'\n            +'<a href=\"https://vk.com/id163781571\">'\n                +'<img src=\"' + t + '\" style=\"width: 100px\"/>'\n            +'</a>'\n    }\n    $('#div_id').html(html)\n}*/\n\n\nvar app = new Vue({\n    el: '#app',\n    data: {\n        url: \"http://api.vk.com/method/photos.getAll?owner_id=\",\n        text: '',\n        access_token: access_token,//\"2348c995ff33a38390d5fe6d7ccd7d1a575252a6e902a36e8b689bfc22fd3f76d89304211d7763bb72228\",\n        username: \"\",\n        user_id: user_id,\n        photos: [],\n        //next_url: \"\",\n        error: false,\n    },\n    computed: {\n        getPage() {\n            return 'https://vk.com/id' + this.user_id\n        }\n    },\n    methods: {\n        getPhotos(offset) {\n            $.ajax ({\n                url: this.url + this.user_id + \"&offset=\" + offset + \"&access_token=\" + this.access_token + \"&v=5.103\",\n                method: 'GET',\n                dataType: 'JSONP',\n                success: function(data) {\n                    if (app.photos === undefined) {\n                        app.photos = []\n                    }\n                    for (let elem in data.response.items){\n                        app.photos.push(data.response.items[elem].sizes[data.response.items[elem].sizes.length - 1].url)\n                    };\n                }\n            })\n        },\n    },\n    created() {\n        $.ajax ({\n            url: \"https://api.vk.com/method/users.get?user_ids=\" + this.user_id + \"&access_token=\" + this.access_token + \"&v=5.103\",\n            method: 'GET',\n            dataType: 'JSONP',\n            success: function (data) {\n                app.username = data.response[0].first_name + ' ' + data.response[0].last_name\n                //app.user_id = data.response[0].id\n            }\n        })\n        this.getPhotos(0)\n    }\n})\n\n/*\n\nVue.config.productionTip = false;\n\nnew Vue({\n    render: h => h(App)\n}).$mount(\"#app\");*/\n\n/*\nvar app = new Vue({\n    el: '#app',\n    data: {\n        product: \"VK Gallery\"\n    }\n})*/\n\n\n/*var app = new Vue({\n    el: '#app',\n    data: {\n      access_token: \"2348c995ff33a38390d5fe6d7ccd7d1a575252a6e902a36e8b689bfc22fd3f76d89304211d7763bb72228\",\n      url: \"http://api.vk.com/method/photos.getAll?owner_id=163781571\",\n      username: \"\",\n      user_id: \"\",\n      grams: [],\n      next_url: \"\",\n      error: false,\n      count: 0\n    },\n    render: function(h) {*/\n        /*html='<ul>'\n        console.log(this.grams)\n        for (pic in this.grams){\n            var t = this.grams[pic]\n            html +=\n                '<li>'\n                +'<a href=\"https://vk.com/id163781571\">'\n                    +'<img src=\"' + t + '\" style=\"width: 100px\"/>'\n                +'</a>'\n        }\n        html += '</ul>'\n        console.log(html)*/\n        //$('#div_id').html(html)\n        /*return h(App)/*h('h1', [h('a', {\n                attrs: {\n                    href: 'https://vk.com/id' + this.user_id,\n                }\n            }, 'See ' + this.username + '  at VK.com')])*/\n    /*},\n    computed: {\n        instapage() {\n            return 'https://vk.com/id' + this.user_id\n        }\n    },\n    methods: {\n        getGrams() {\n            $.ajax ({\n            url: this.url + \"&access_token=\" + this.access_token + \"&v=5.103\",\n            method: 'GET',\n            dataType: 'JSONP',\n            success: function(data) {\n                console.log(data)\n                if (Vue.grams === undefined) {\n                    Vue.grams = []\n                }\n                for (elem in data.response.items){\n                    Vue.grams.push(data.response.items[elem].sizes[data.response.items[elem].sizes.length - 1].url)\n                };\n                for(i in this.grams){\n                    render('img', {\n                        attrs: {\n                            src: require(this.grams[i]),\n                            alt: this.grams[i]\n                        }\n                    })\n                }\n                //render()\n                //drawPics(Vue.grams)\n                //console.log(Vue.grams)\n            }\n        })*/\n        /*axios.get(this.url + \"&access_token=\" + this.access_token + \"&v=5.103\")\n          .then(({data}) => {\n              console.log(data)\n            this.grams = data.data\n            this.username = data.data[0].user.username\n            this.next_url = data.pagination.next_url\n          })\n          .catch(function (error) {\n            console.log(error)\n            this.error = true\n          });*/\n      /*},\n      getMoreGrams(){\n        axios.get(this.next_url)\n          .then(({data}) => {\n            this.grams = this.grams.concat(data.data)\n            this.next_url = data.pagination.next_url\n          })\n          .catch(function (error) {\n            console.log(error)\n            this.error = true\n          });\n      }\n    },\n    created() {\n        $.ajax ({\n            url: \"https://api.vk.com/method/users.get?user_ids=163781571&access_token=\" + this.access_token + \"&v=5.103\",\n            method: 'GET',\n            dataType: 'JSONP',\n            success: function (data) {\n                Vue.set(app, \"username\", data.response[0].first_name + ' ' + data.response[0].last_name)\n                Vue.set(app, \"user_id\", data.response[0].id)\n                //this.render\n            }\n        })\n        this.getGrams();\n    }\n})*/\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });
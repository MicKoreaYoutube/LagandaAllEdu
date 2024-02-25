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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/import.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/import.js":
/*!****************************************!*\
  !*** ./app/javascript/packs/import.js ***!
  \****************************************/
/*! exports provided: app */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "app", function() { return app; });
!(function webpackMissingModule() { var e = new Error("Cannot find module 'https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'https://www.gstatic.com/firebasejs/9.18.0/firebase-analytics.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Import the functions you need from the SDKs you need

 // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

var firebaseConfig = {
  apiKey: 'AIzaSyCyJ_NaOKk-judnyH7vw80dFNjr1JZcMHI',
  authDomain: 'lagandaalledu.firebaseapp.com',
  projectId: 'lagandaalledu',
  storageBucket: 'lagandaalledu.appspot.com',
  messagingSenderId: '1068623284262',
  appId: '1:1068623284262:web:70d5927640ea002476bee7',
  measurementId: 'G-3JGM0NGWDB'
}; // Initialize Firebase

var app = !(function webpackMissingModule() { var e = new Error("Cannot find module 'https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(firebaseConfig);
var analytics = !(function webpackMissingModule() { var e = new Error("Cannot find module 'https://www.gstatic.com/firebasejs/9.18.0/firebase-analytics.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(app);

var auth = !(function webpackMissingModule() { var e = new Error("Cannot find module 'https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
var user = auth.currentUser;

if (user) {
  $('#notlogin').addClass('d-none');
  $('#login').removeClass('d-none');
} else {
  $('#login').addClass('d-none');
  $('#notlogin').removeClass('d-none');
}

/***/ })

/******/ });
//# sourceMappingURL=import-104ee628ef57110e1670.js.map
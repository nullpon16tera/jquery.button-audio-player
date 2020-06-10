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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/jquery.button-audio-player.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/_btn-bar-animation.js":
/*!**************************************!*\
  !*** ./src/js/_btn-bar-animation.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function buttonBarAnimation(audio) {
  this.btnOnSVG = '<svg id="bapIconSoundOn" x="0px" y="0px" viewBox="0 0 60 60" enable-background="new 0 0 60 60" xml:space="preserve"><path d="M28.4,7.8c-1-0.6-2.1-0.5-3.1,0c0,0-0.1,0.1-0.1,0.1L11.6,19.4H1c-0.6,0-1,0.4-1,1v19c0,0.3,0.1,0.5,0.3,0.7 s0.4,0.3,0.7,0.3l10.6,0l13.5,12.4c0,0,0.1,0.1,0.2,0.1c0.5,0.3,1,0.4,1.6,0.4c0.5,0,1-0.1,1.5-0.4c1-0.6,1.6-1.6,1.6-2.8V10.5 C30,9.4,29.4,8.3,28.4,7.8z M28,50.2c0,0.4-0.2,0.8-0.6,1c-0.2,0.1-0.5,0.3-1,0L13,38.9v-4.6c0-0.6-0.4-1-1-1s-1,0.4-1,1v4l-9,0 v-17h9v4c0,0.6,0.4,1,1,1s1-0.4,1-1v-4.5L26.4,9.5c0.5-0.2,0.9-0.1,1,0c0.4,0.2,0.6,0.6,0.6,1V50.2z"/><path d="M52,29.9c0-8.3-5.3-15.8-13.2-18.4c-0.5-0.2-1.1,0.1-1.3,0.6c-0.2,0.5,0.1,1.1,0.6,1.3C45.3,15.7,50,22.4,50,29.9 c0,7.5-4.8,14.1-11.8,16.6c-0.5,0.2-0.8,0.7-0.6,1.3c0.1,0.4,0.5,0.7,0.9,0.7c0.1,0,0.2,0,0.3-0.1C46.7,45.6,52,38.2,52,29.9z"/><path d="M44.5,6.4c-0.5-0.2-1.1,0-1.3,0.5c-0.2,0.5,0,1.1,0.5,1.3C52.4,11.9,58,20.4,58,29.9c0,9.8-5.9,18.4-15,21.9 c-0.5,0.2-0.8,0.8-0.6,1.3c0.2,0.4,0.5,0.6,0.9,0.6c0.1,0,0.2,0,0.4-0.1C53.6,49.8,60,40.5,60,29.9C60,19.6,53.9,10.4,44.5,6.4z"/><path d="M43,29.9c0-6-4-11.3-9.7-13c-0.5-0.2-1.1,0.2-1.2,0.7c-0.2,0.5,0.2,1.1,0.7,1.2c4.9,1.4,8.3,6,8.3,11s-3.4,9.6-8.3,11 c-0.5,0.2-0.8,0.7-0.7,1.2c0.1,0.4,0.5,0.7,1,0.7c0.1,0,0.2,0,0.3,0C39,41.2,43,35.8,43,29.9z"/></svg>';
  this.btnOffSVG = '<svg id="bapIconSoundOff" x="0px" y="0px" viewBox="0 0 54 54" enable-background="new 0 0 54 54" xml:space="preserve"><path d="M46.4,26l7.3-7.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L45,24.6l-7.3-7.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l7.3,7.3l-7.3,7.3 c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7.3-7.3l7.3,7.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L46.4,26z"/><path d="M28.4,4.4c-1-0.6-2.1-0.5-3.1,0c0,0-0.1,0.1-0.1,0.1L11.6,16H1c-0.6,0-1,0.4-1,1v19c0,0.3,0.1,0.5,0.3,0.7S0.7,37,1,37 l10.6,0l13.5,12.4c0,0,0.1,0.1,0.2,0.1c0.5,0.3,1,0.4,1.6,0.4c0.5,0,1-0.1,1.5-0.4c1-0.6,1.6-1.6,1.6-2.8V7.2C30,6,29.4,5,28.4,4.4 z M28,46.8c0,0.4-0.2,0.8-0.6,1c-0.2,0.1-0.5,0.3-1,0L13,35.6V31c0-0.6-0.4-1-1-1s-1,0.4-1,1v4l-9,0V18h9v4c0,0.6,0.4,1,1,1 s1-0.4,1-1v-4.5L26.4,6.1c0.5-0.2,0.9-0.1,1,0c0.4,0.2,0.6,0.6,0.6,1V46.8z"/></svg>'; // this.$elem = elem;

  this.audio = audio || false;
}

buttonBarAnimation.prototype = {
  init: function init(elem) {
    if (this.audio !== false) {
      return this.render(elem);
    }

    return null;
  },
  render: function render(elem) {
    var self = this;
    var button = $('<button/>', {
      type: 'button',
      html: function html() {
        var bars = $('<div/>').addClass('bap-bars').html(function () {
          for (var i = 1; i <= 5; i++) {
            var bar = $('<span/>').addClass('bap-bar').attr('data-bap-bar', i);
            $(this).append(bar);
          }
        }).appendTo(this);
      },
      click: function click(e) {
        e.preventDefault();

        if (self.audio.paused) {
          $(this).removeClass('bap-deactive').addClass('bap-active');
          self.audio.play();
        } else {
          $(this).removeClass('bap-active').addClass('bap-deactive');
          self.audio.pause();
        }
      }
    }).addClass('bap-btn bap-btn-bar-animation bap-deactive');
    button.appendTo(elem);
    return button;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (buttonBarAnimation);

/***/ }),

/***/ "./src/js/_btn-default.js":
/*!********************************!*\
  !*** ./src/js/_btn-default.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function buttonDefault(audio) {
  this.btnOnSVG = '<svg id="bapIconSoundOn" x="0px" y="0px" viewBox="0 0 60 60" enable-background="new 0 0 60 60" xml:space="preserve">';
  this.btnOnSVG += '<path d="M28.4,7.8c-1-0.6-2.1-0.5-3.1,0c0,0-0.1,0.1-0.1,0.1L11.6,19.4H1c-0.6,0-1,0.4-1,1v19c0,0.3,0.1,0.5,0.3,0.7 s0.4,0.3,0.7,0.3l10.6,0l13.5,12.4c0,0,0.1,0.1,0.2,0.1c0.5,0.3,1,0.4,1.6,0.4c0.5,0,1-0.1,1.5-0.4c1-0.6,1.6-1.6,1.6-2.8V10.5 C30,9.4,29.4,8.3,28.4,7.8z M28,50.2c0,0.4-0.2,0.8-0.6,1c-0.2,0.1-0.5,0.3-1,0L13,38.9v-4.6c0-0.6-0.4-1-1-1s-1,0.4-1,1v4l-9,0 v-17h9v4c0,0.6,0.4,1,1,1s1-0.4,1-1v-4.5L26.4,9.5c0.5-0.2,0.9-0.1,1,0c0.4,0.2,0.6,0.6,0.6,1V50.2z"/>';
  this.btnOnSVG += '<path d="M52,29.9c0-8.3-5.3-15.8-13.2-18.4c-0.5-0.2-1.1,0.1-1.3,0.6c-0.2,0.5,0.1,1.1,0.6,1.3C45.3,15.7,50,22.4,50,29.9 c0,7.5-4.8,14.1-11.8,16.6c-0.5,0.2-0.8,0.7-0.6,1.3c0.1,0.4,0.5,0.7,0.9,0.7c0.1,0,0.2,0,0.3-0.1C46.7,45.6,52,38.2,52,29.9z"/><path d="M44.5,6.4c-0.5-0.2-1.1,0-1.3,0.5c-0.2,0.5,0,1.1,0.5,1.3C52.4,11.9,58,20.4,58,29.9c0,9.8-5.9,18.4-15,21.9 c-0.5,0.2-0.8,0.8-0.6,1.3c0.2,0.4,0.5,0.6,0.9,0.6c0.1,0,0.2,0,0.4-0.1C53.6,49.8,60,40.5,60,29.9C60,19.6,53.9,10.4,44.5,6.4z"/><path d="M43,29.9c0-6-4-11.3-9.7-13c-0.5-0.2-1.1,0.2-1.2,0.7c-0.2,0.5,0.2,1.1,0.7,1.2c4.9,1.4,8.3,6,8.3,11s-3.4,9.6-8.3,11 c-0.5,0.2-0.8,0.7-0.7,1.2c0.1,0.4,0.5,0.7,1,0.7c0.1,0,0.2,0,0.3,0C39,41.2,43,35.8,43,29.9z"/>';
  this.btnOnSVG += '</svg>';
  this.btnOffSVG = '<svg id="bapIconSoundOff" x="0px" y="0px" viewBox="0 0 54 54" enable-background="new 0 0 54 54" xml:space="preserve"><path d="M46.4,26l7.3-7.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L45,24.6l-7.3-7.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l7.3,7.3l-7.3,7.3 c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7.3-7.3l7.3,7.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L46.4,26z"/><path d="M28.4,4.4c-1-0.6-2.1-0.5-3.1,0c0,0-0.1,0.1-0.1,0.1L11.6,16H1c-0.6,0-1,0.4-1,1v19c0,0.3,0.1,0.5,0.3,0.7S0.7,37,1,37 l10.6,0l13.5,12.4c0,0,0.1,0.1,0.2,0.1c0.5,0.3,1,0.4,1.6,0.4c0.5,0,1-0.1,1.5-0.4c1-0.6,1.6-1.6,1.6-2.8V7.2C30,6,29.4,5,28.4,4.4 z M28,46.8c0,0.4-0.2,0.8-0.6,1c-0.2,0.1-0.5,0.3-1,0L13,35.6V31c0-0.6-0.4-1-1-1s-1,0.4-1,1v4l-9,0V18h9v4c0,0.6,0.4,1,1,1 s1-0.4,1-1v-4.5L26.4,6.1c0.5-0.2,0.9-0.1,1,0c0.4,0.2,0.6,0.6,0.6,1V46.8z"/></svg>';
  this.audio = audio || false;
}

buttonDefault.prototype = {
  init: function init(elem) {
    if (this.audio !== false) {
      return this.render(elem);
    }

    return null;
  },
  render: function render(elem) {
    var self = this;
    var iconOn = $('<div/>').addClass('bap-icon-on').html(this.btnOnSVG);
    var iconOff = $('<div/>').addClass('bap-icon-off').html(this.btnOffSVG);
    var textOn = $('<div/>').addClass('bap-onoff-text').html('<span>ON</span>');
    var textOff = $('<div/>').addClass('bap-onoff-text').html('<span>OFF</span>');
    var button = $('<button/>', {
      type: 'button',
      icon: null,
      html: function html() {
        var icon = $('<div/>').addClass('bap-icon').html(iconOff);
        $(this).html(icon).append(textOff);
      },
      click: function click(e) {
        e.preventDefault();
        var text = self.audio.paused ? textOn : textOff;
        var icon = $('<div/>', {
          'class': 'bap-icon',
          html: function html() {
            if (self.audio.paused) {
              $(this).html(iconOn);
              self.audio.play();
            } else {
              $(this).html(iconOff);
              self.audio.pause();
            }
          }
        });
        $(this).html(icon).append(text);
      }
    }).addClass('bap-btn bap-btn-default bap-deactive');
    button.appendTo(elem);
    return button;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (buttonDefault);

/***/ }),

/***/ "./src/js/jquery.button-audio-player.js":
/*!**********************************************!*\
  !*** ./src/js/jquery.button-audio-player.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _btn_default_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_btn-default.js */ "./src/js/_btn-default.js");
/* harmony import */ var _btn_bar_animation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_btn-bar-animation.js */ "./src/js/_btn-bar-animation.js");



if (typeof jQuery !== 'undefined') {
  window.$ = jQuery;
}

var buttonAudioPlayer = function buttonAudioPlayer(options) {
  var defaults = {
    el: '#bapRender',
    src: null,
    type: 'default'
  };
  this.option = $.extend(true, defaults, options);
  var self = this;
  var elem = this;

  if (typeof elem.length === 'undefined') {
    elem = $(this.option.el);
  }

  return elem.each(function () {
    this.$elem = $(this);
    this.audio = false;

    if (self.option.src) {
      this.audio = new Audio(self.option.src);
      this.audio.loop = true;
    }

    if (self.option.type === 'bar-animation') {
      var btnBarAnimation = new _btn_bar_animation_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.audio);
      btnBarAnimation.init(this.$elem);
    } else {
      var btnDefault = new _btn_default_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.audio);
      btnDefault.init(this.$elem);
    }
  });
};

window.buttonAudioPlayer = buttonAudioPlayer;
$.fn.buttonAudioPlayer = buttonAudioPlayer;

/***/ })

/******/ });
//# sourceMappingURL=jquery.button-audio-player.js.map
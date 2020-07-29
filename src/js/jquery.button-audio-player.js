import buttonDefault from './_btn-default.js';
import buttonBarAnimation from './_btn-bar-animation.js';
import { isNumeric } from 'jquery';

if (typeof jQuery !== 'undefined') {
  window.$ = jQuery;
}

var buttonAudioPlayer = function (options) {
  var defaults = {
    el: '#bapRender',
    src: null,
    type: 'default',
    loop: true,
    loopStart: false,
    loopEnd: false
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
      this.audio.loop = self.option.loop;
    }

    if (self.option.type === 'bar-animation') {
      var btnBarAnimation = new buttonBarAnimation(this.audio);
      btnBarAnimation.init(this.$elem);
    } else {
      var btnDefault = new buttonDefault(this.audio);
      btnDefault.init(this.$elem);
    }

    this.audio.addEventListener('timeupdate', function () {
      // console.log(this.currentTime);
      if (isNumeric(self.option.loopStart) && isNumeric(self.option.loopEnd)) {
        if (self.option.loopEnd < this.currentTime) {
          this.currentTime = self.option.loopStart;
        }
      }
    }, false);
  });
}

window.buttonAudioPlayer = buttonAudioPlayer;
$.fn.buttonAudioPlayer = buttonAudioPlayer;

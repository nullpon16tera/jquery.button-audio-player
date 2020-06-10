import buttonDefault from './_btn-default.js';
import buttonBarAnimation from './_btn-bar-animation.js';

if (typeof jQuery !== 'undefined') {
  window.$ = jQuery;
}

var buttonAudioPlayer = function (options) {
  var defaults = {
    el: '#bapRender',
    src: null,
    type: 'default',
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
      var btnBarAnimation = new buttonBarAnimation(this.audio);
      btnBarAnimation.init(this.$elem);
    } else {
      var btnDefault = new buttonDefault(this.audio);
      btnDefault.init(this.$elem);
    }
  });
}

window.buttonAudioPlayer = buttonAudioPlayer;
$.fn.buttonAudioPlayer = buttonAudioPlayer;

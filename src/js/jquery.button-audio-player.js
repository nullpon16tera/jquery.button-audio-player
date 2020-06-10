import buttonDefault from './_btn-default.js';
import buttonBarAnimation from './_btn-bar-animation.js';


var buttonAudioPlayer = function (options) {
  var defaults = {
    src: null,
    type: 'default',
  };
  this.option = $.extend(true, defaults, options);

  this.$elem = $(this);

  this.audio = false;

  if (this.option.src) {
    this.audio = new Audio(this.option.src);
    this.audio.loop = true;
  }

  if (this.option.type === 'bar-animation') {
    var btnBarAnimation = new buttonBarAnimation(this.audio);
    btnBarAnimation.init(this.$elem);
  } else {
    var btnDefault = new buttonDefault(this.audio);
    btnDefault.init(this.$elem);
  }
}

// window.buttonAudioPlayer = buttonAudioPlayer;

$.fn.buttonAudioPlayer = buttonAudioPlayer;

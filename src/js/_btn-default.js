function buttonDefault(audio) {
  this.btnOnSVG = '<svg id="bapIconSoundOn" x="0px" y="0px" viewBox="0 0 60 60" enable-background="new 0 0 60 60" xml:space="preserve">';
  this.btnOnSVG += '<path d="M28.4,7.8c-1-0.6-2.1-0.5-3.1,0c0,0-0.1,0.1-0.1,0.1L11.6,19.4H1c-0.6,0-1,0.4-1,1v19c0,0.3,0.1,0.5,0.3,0.7 s0.4,0.3,0.7,0.3l10.6,0l13.5,12.4c0,0,0.1,0.1,0.2,0.1c0.5,0.3,1,0.4,1.6,0.4c0.5,0,1-0.1,1.5-0.4c1-0.6,1.6-1.6,1.6-2.8V10.5 C30,9.4,29.4,8.3,28.4,7.8z M28,50.2c0,0.4-0.2,0.8-0.6,1c-0.2,0.1-0.5,0.3-1,0L13,38.9v-4.6c0-0.6-0.4-1-1-1s-1,0.4-1,1v4l-9,0 v-17h9v4c0,0.6,0.4,1,1,1s1-0.4,1-1v-4.5L26.4,9.5c0.5-0.2,0.9-0.1,1,0c0.4,0.2,0.6,0.6,0.6,1V50.2z"/>';
  this.btnOnSVG += '<path d="M52,29.9c0-8.3-5.3-15.8-13.2-18.4c-0.5-0.2-1.1,0.1-1.3,0.6c-0.2,0.5,0.1,1.1,0.6,1.3C45.3,15.7,50,22.4,50,29.9 c0,7.5-4.8,14.1-11.8,16.6c-0.5,0.2-0.8,0.7-0.6,1.3c0.1,0.4,0.5,0.7,0.9,0.7c0.1,0,0.2,0,0.3-0.1C46.7,45.6,52,38.2,52,29.9z"/><path d="M44.5,6.4c-0.5-0.2-1.1,0-1.3,0.5c-0.2,0.5,0,1.1,0.5,1.3C52.4,11.9,58,20.4,58,29.9c0,9.8-5.9,18.4-15,21.9 c-0.5,0.2-0.8,0.8-0.6,1.3c0.2,0.4,0.5,0.6,0.9,0.6c0.1,0,0.2,0,0.4-0.1C53.6,49.8,60,40.5,60,29.9C60,19.6,53.9,10.4,44.5,6.4z"/><path d="M43,29.9c0-6-4-11.3-9.7-13c-0.5-0.2-1.1,0.2-1.2,0.7c-0.2,0.5,0.2,1.1,0.7,1.2c4.9,1.4,8.3,6,8.3,11s-3.4,9.6-8.3,11 c-0.5,0.2-0.8,0.7-0.7,1.2c0.1,0.4,0.5,0.7,1,0.7c0.1,0,0.2,0,0.3,0C39,41.2,43,35.8,43,29.9z"/>';
  this.btnOnSVG += '</svg>';

  this.btnOffSVG = '<svg id="bapIconSoundOff" x="0px" y="0px" viewBox="0 0 54 54" enable-background="new 0 0 54 54" xml:space="preserve"><path d="M46.4,26l7.3-7.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L45,24.6l-7.3-7.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l7.3,7.3l-7.3,7.3 c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7.3-7.3l7.3,7.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L46.4,26z"/><path d="M28.4,4.4c-1-0.6-2.1-0.5-3.1,0c0,0-0.1,0.1-0.1,0.1L11.6,16H1c-0.6,0-1,0.4-1,1v19c0,0.3,0.1,0.5,0.3,0.7S0.7,37,1,37 l10.6,0l13.5,12.4c0,0,0.1,0.1,0.2,0.1c0.5,0.3,1,0.4,1.6,0.4c0.5,0,1-0.1,1.5-0.4c1-0.6,1.6-1.6,1.6-2.8V7.2C30,6,29.4,5,28.4,4.4 z M28,46.8c0,0.4-0.2,0.8-0.6,1c-0.2,0.1-0.5,0.3-1,0L13,35.6V31c0-0.6-0.4-1-1-1s-1,0.4-1,1v4l-9,0V18h9v4c0,0.6,0.4,1,1,1 s1-0.4,1-1v-4.5L26.4,6.1c0.5-0.2,0.9-0.1,1,0c0.4,0.2,0.6,0.6,0.6,1V46.8z"/></svg>';

  this.audio = audio || false;
}

buttonDefault.prototype = {
  init: function (elem) {
    if (this.audio !== false) {
      return this.render(elem);
    }

    return null;
  },

  render: function (elem) {
    var self = this;
    var iconOn = $('<div/>').addClass('bap-icon-on').html(this.btnOnSVG);
    var iconOff = $('<div/>').addClass('bap-icon-off').html(this.btnOffSVG);

    var textOn = $('<div/>').addClass('bap-onoff-text').html('<span>ON</span>');
    var textOff = $('<div/>').addClass('bap-onoff-text').html('<span>OFF</span>');

    var button = $('<button/>', {
      type: 'button',
      icon: null,
      html: function () {
        var icon = $('<div/>').addClass('bap-icon').html(iconOff);

        $(this).html(icon).append(textOff);
      },
      click: function (e) {
        e.preventDefault();
        var text = (self.audio.paused) ? textOn : textOff;
        var icon = $('<div/>', {
          'class': 'bap-icon',
          html: function () {
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
}

export default buttonDefault;
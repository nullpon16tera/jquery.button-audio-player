import $ from 'jquery';
window.jQuery = $;
require('./jquery.button-audio-player');

var bap = new buttonAudioPlayer({
  el: '#bapRender',
  type: 'default',
  src: 'https://www.dropbox.com/s/z82oforvo77yw93/Robin%20Hustin%20x%20Tobimorrow%20-%20Light%20It%20Up%20%28feat.%20Jex%29%20V2.mp3?dl=1'
});
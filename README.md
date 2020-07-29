## ダウンロード
[GitHub](https://github.com/nullpon16tera/jquery.button-audio-player)

### NPM

```bash
$ npm install jquery.button-audio-player
```

## サンプル
[利用方法やサンプルページ](https://nullpon16tera.github.io/jquery.button-audio-player/sample/)

## 利用方法
### CSS
```html
<link rel="stylesheet" href="./path/to/jquery.button-audio-player.css">
```

### JavaScript
```html
<script src="./path/to/jquery.js"></script><!-- jQuery fileを読み込んでください。CDNなどからご利用するのをおすすめします。 -->
<script src="./path/to/jquery.button-audio-player.js"></script>
```
上記CSSとJSファイルを設置したら、以下のコードを記述します。  
[cdnjs](https://cdnjs.com/libraries/jquery/3.4.1)

## コードの記述
```html
<div id="bapRender"></div>
<!--
  ID名は好きに記述してください。
  好きな場所にDIVタグなどで配置してください。
  配置したタグのID名などで呼び出すようにしてください。
-->
```

```javascript
<script>
(function($) {
  $('{ID or Class Name}').buttonAudioPlayer({
    type: 'default',
    src: 'path/to/example.mp3'
  });
})(jQuery);
</script>
```

## NPMでインストールした場合の利用方法

### SCSS
```scss
@import '~jquery.button-audio-player/dist/jquery.button-audio-player.css';
```

### JavaScript (webpackなど)
```javascript
import $ from 'jquery';
window.jQuery = $;
import 'jquery.button-audio-player';

var bap = new buttonAudioPlayer({
  el: '#bapRender', // {ID or Class Name}
  type: 'default',
  src: 'path/to/mp3 file or file url'
});
```


### オプション
| Key | Default | Description |
| ------------- | ------------- | ------------- |
| type | default | (String) 設定は以下の通り。default、bar-animation |
| src | - | (String) MP3 ファイルまでのPATHまたは、URLを記述 |
| loop | true | (Boolen) ループするかしないか。下にあるloopStart、loopEndが設定されている場合は、こちらの設定はスルーされる |
| loopStart | false | (Numeric) ループ時のスタート地点の秒数 1/sec |
| loopEnd | false | (Numeric) ループさせるための終端地点の秒数 1/sec |
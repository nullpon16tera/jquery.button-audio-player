## ダウンロード
GitHub

## 利用方法
### CSS
```
<link rel="stylesheet" href="./path/to/jquery.button-audio-player.css">
```

### JavaScript
```
<script src="./path/to/jquery.button-audio-player.js"></script>
```
上記CSSとJSファイルを設置したら、以下のコードを記述します。


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


### オプション
| Key | Default | Description |
| type | default | (String) 設定は以下の通り。default、bar-animation |
| src | - | (String) MP3 ファイルまでのPATHまたは、URLを記述 |
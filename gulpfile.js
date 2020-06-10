require('dotenv').config();
const { src, watch, series, parallel, dest, lastRun, task } = require('gulp')
const rimraf   = require('rimraf')
const $ = require('gulp-load-plugins')()
const sass     = require('gulp-sass')
const sassGlob = require('gulp-sass-glob')
const sourcemaps = require('gulp-sourcemaps')
const packageImporter = require('node-sass-package-importer')
const webpackStream = require('webpack-stream')
const webpack = require('webpack')
const browserSync = require('browser-sync').create('bsServer')
const gutil = require('gulp-util')
const cp = require('child_process')
const through2 = require('through2')

const ENV = (process.env.NODE_ENV || 'development').trim().toLowerCase()

let www = (process.env.VIRTUAL_NAME_WWW === true ? 'www.' : '')

let serverConfig = {
  scheme: 'http://',
  proxy_name: www + process.env.VIRTUAL_NAME,
  port: 1085
}

let webroot_path = 'sample/';
let assets_path = `${webroot_path}assets/`;
let sassFiles = [
  'src/scss/jquery.button-audio-player.scss',
]


let webpackConfig = require('./webpack.config')

function clean(cb) {
  rimraf(`${assets_path}`, cb)
}

function sassBuild() {
  let sassSet =  src(sassFiles, {
    sourcemaps: true
  })
    .pipe($.plumber({
      errorHandler: function(err) {
        console.log(err.messageFormatted)
        this.emit('end')
      }
    }))
    .pipe(sassGlob())
    .pipe(
      sass({
        importer: packageImporter()
      }).on("error", sass.logError)
    )
    .pipe(
      $.autoprefixer({
        // browsers: 'last 2 versions',
        cascade: false
      })
    )

    if ( ENV === 'production' ) {
      sassSet.pipe($.cleanCss())
      return sassSet
        .pipe(
          through2.obj(function(chunk, enc, callback) {
            const date = new Date();
            // date.setTime(date.getTime() + 1000 * 60 * 60 * 9);
            chunk.stat.atime = date;
            chunk.stat.mtime = date;
            callback(null, chunk);
          })
        )
        .pipe(dest(`dist`))
    }

  return sassSet
    .pipe(
      through2.obj(function(chunk, enc, callback) {
        const date = new Date();
        // date.setTime(date.getTime() + 1000 * 60 * 60 * 9);
        chunk.stat.atime = date;
        chunk.stat.mtime = date;
        callback(null, chunk);
      })
    )
    .pipe(
      dest(`${assets_path}css`, {
        sourcemaps: "maps"
      })
    )
    .pipe(
      browserSync.stream({
        match: "**/*.css"
      })
    );
}

function jsBuild() {
  var destPath = `${assets_path}js`;
  if (ENV === 'production') {
    webpackConfig.mode = 'production'
    var destPath = 'dist';
  }
  return src('src/js/**/*.js')
    .pipe($.plumber({
      errorHandler: function(err) {
        console.log(err.messageFormatted)
        this.emit('end')
      }
    }))
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(dest(destPath))
}

function bsInit(cb) {
  browserSync.init({
    // host: '0.0.0.0',
    port: serverConfig.port,
    files: [
      `./${webroot_path}**/*.php`,
      `./${assets_path}css/**/*.css`,
      `./${assets_path}js/**/*.js`,
    ],
    server: './sample',
    watch: true,
    ui: false,
    watchOptions: {
      usePolling: true,
      interval: 1000
    },
    // proxy: {
    //   target: serverConfig.scheme + serverConfig.proxy_name,
    //   ws: true
    // },
    notify: false,
    reloadOnRestart: true,
    scrollProportionally: false,
    ghostMode: {
      clicks: false,
      scroll: false
    }
  })
  cb()
}

function browserReload(done) {
  browserSync.reload()
  done()
}

function watchFiles(done) {
  watch(
    [
      `${webroot_path}**/*.php`,
      `${assets_path}**/*.(^js|jpg|png|svg|gif)`,
    ],
    series(browserReload)
  );
  watch("src/js/**/*.js", series(jsBuild))
  watch("src/scss/**/*.scss", series(sassBuild))
  done()
}

exports.sassBuild = task(sassBuild)
exports.jsBuild = task(jsBuild)
exports.build = series(parallel(sassBuild, jsBuild))
exports.default = series(parallel(sassBuild, jsBuild), series(bsInit, watchFiles))
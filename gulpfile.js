const gulp = require('gulp')
const sass = require('gulp-sass')
const util = require('gulp-util')
const rename = require('gulp-rename')
const sequence = require('run-sequence')

require('./gulpTasks/server')
require('./gulpTasks/app')

const scssFiles = './src/scss/style.scss'
const cssDest = './build/css'
const sassDevOptions = {outputStyle: 'expanded'}
const sassProdOptions = {outputStyle: 'compressed'}

gulp.task('sassdev', () => {
    gulp.src(scssFiles)
    .pipe(sass(sassDevOptions).on('error', sass.logError))
    .pipe(gulp.dest(cssDest))
})

gulp.task('sassprod', () => {
    gulp.src(scssFiles)
    .pipe(sass(sassProdOptions).on('error', sass.logError))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest(cssDest))
})

gulp.task('watchsass', () => {
    gulp.watch(scssFiles, ['sassdev', 'sassprod'])
})

gulp.task('default', () => {
    if(util.env.production) {
        sequence('app')
    } else {
        sequence(['sassdev', 'sassprod', 'watchsass'], 'app', 'server')
    }
})
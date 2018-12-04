const gulp = require('gulp')
const babel = require('gulp-babel')
const concat = require('gulp-concat')

gulp.task('app', ['app.html', 'app.css', 'app.js', 'app.assets'])

gulp.task('app.html', () => {
    return gulp.src('src/**/*.html')
    .pipe(gulp.dest('build'))
})

gulp.task('app.css', () => {
    return gulp.src('src/css/**/*.css')
    .pipe(gulp.dest('build/css'))
})

gulp.task('app.js', () => {
    return gulp.src('src/js/**/*.js')
    .pipe(babel({presets: ['env']}))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('build/js'))
})

gulp.task('app.assets', () => {
    return gulp.src('src/img/**/*.*')
    .pipe(gulp.dest('build/img'))
})
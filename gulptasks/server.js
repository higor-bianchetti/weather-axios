const gulp = require('gulp')
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')

gulp.task('watch', () => {
    watch('src/**/*.html', () => gulp.start('app.html'))
    watch('src/**/*.css', () => gulp.start('app.css'))
    watch('src/**/*.js', () => gulp.start('app.js'))
    watch('assets/**/*.*', () => gulp.start('app.assets'))
})

gulp.task('server', ['watch'], () => {
    return gulp.src('build').pipe(webserver({
        livereload: true,
        port: 9000,
        open: true
    }))
}) 
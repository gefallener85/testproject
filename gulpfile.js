/**
 * Created by user on 30.06.17.
 */
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');

gulp.task('scss', function () {
    return gulp.src('app/sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            basedir: 'app/'
        },
        notify: false
    });
});

gulp.task('watch', ['browser-sync', 'scss'], function () {
    gulp.watch('app/sass/**/*.scss', ['scss']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});
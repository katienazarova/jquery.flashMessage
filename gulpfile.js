var gulp        = require('gulp'),
    concat      = require('gulp-concat'),
    clean       = require('gulp-clean'),
    sass        = require('gulp-sass'),
    minifyCSS   = require('gulp-minify-css'),
    uglify      = require('gulp-uglify');

gulp.task('js', function() {
    gulp.src('*.js')
        .pipe(concat('jquery.flashMessage.min.js'))
        .pipe(uglify())
        .on('error', function(err) {
            console.error(err.name + ": " + err.message + ' in ' + err.fileName);
        })
        .pipe(gulp.dest(''));
});

gulp.task('scss', function() {
    gulp.src('*.scss')
        .pipe(concat('jquery.flashMessage.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(''))
        .pipe(concat('jquery.flashMessage.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest(''));
});

gulp.task('watch', function() {
    gulp.watch('*.js', ['js']);
    gulp.watch('*.scss', ['scss']);
});

gulp.task('build', ['js', 'scss']);

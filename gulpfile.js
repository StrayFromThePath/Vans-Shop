var gulp = require('gulp'),
    concatCSS = require('gulp-concat-css'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    minifyCSS = require('gulp-minify-css'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    less = require('gulp-less');

gulp.task('connect', function() {
    connect.server({

        livereload: true
    });
});

gulp.task('css', function () {
    gulp.src('less/*.less')
        .pipe(less())
        .pipe(concatCSS("main.css"))
        .pipe(minifyCSS())
        .pipe(rename("main.min.css"))
        .pipe(gulp.dest('css'))
        .pipe(connect.reload());
});

gulp.task('html', function(){
    gulp.src('*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function(){
    gulp.watch('less/*.less' , ['css'])
    gulp.watch('*.html' , ['html'])
});



gulp.task('default', ['connect', 'css', 'html', 'watch']);



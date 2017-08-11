'use strict'

import gulp from 'gulp';
import gutil from 'gulp-util';
import babel from 'gulp-babel';
import sass from 'gulp-sass';
import concat from 'gulp-concat';
import notify from 'gulp-notify';
import uglify from 'gulp-uglify';
import minify from 'gulp-minify-css';
import webserver from 'gulp-webserver';

gulp.task('js', function () {
    gulp.src(['js/**/*.js'])
        .pipe(concat('build.min.js'))
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest('build/'))
});

gulp.task('html', function () {
    gulp.src('build/*.html')
});

gulp.task('sass', function () {
    gulp.src('sass/**/*.scss')
        .pipe(sass())
        .pipe(minify())
        .pipe(gulp.dest('build/'));
});

gulp.task('watch', function () {
    gulp.watch('js/**/*', ['js']);
    gulp.watch('sass/**/*.scss', ['sass']);
    gulp.watch(['banner/*.html'], ['html']);
});

gulp.task('webserver', function () {
    gulp.src('build/')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});


gulp.task('default', ['watch', 'html', 'js', 'sass', 'webserver']);

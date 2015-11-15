'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');
var react = require('gulp-react');
var uglify = require('gulp-uglify');
var sass = require('gulp-ruby-sass');
var server = require('gulp-webserver');
var runSequence = require('run-sequence');
var vendor = require('gulp-concat-vendor');
var include = require('gulp-include-source');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('build', function() {
    runSequence(
        'clean',
        'vendor',
        ['copy-src-ng', 'copy-src-jsx', 'copy-src-scss'],
        'include'
    )
})

gulp.task('watch', function(cb) {
    gulp.watch('src/**/*', ['build']);
})

gulp.task('clean', function() {
    return gulp.src('www/*')
    .pipe(clean().on('error', error));
})

gulp.task('vendor', function() {
    return gulp.src('vendor/*')
    .pipe(vendor('vendor.js').on('error', error))
    .pipe(gulp.dest('www/'));
});

gulp.task('include', function() {
    return gulp.src('src/index.html')
    .pipe(gulp.dest('www/'))
    .pipe(include())
    .pipe(gulp.dest('www/'));
})

gulp.task('copy-src-scss', function() {
    return sass('src/scss/app.scss')
    .on('error', sass.logError)
    .pipe(gulp.dest('www/css/'));
})

gulp.task('copy-src-ng', function() {
    return gulp.src('src/js/**/*.js')
    .pipe(ngAnnotate().on('error', error))
    .pipe(gulp.dest('www/js/'));
});

gulp.task('copy-src-jsx', function() {
    return gulp.src('src/js/**/*.jsx')
    .pipe(react().on('error', error))
    .pipe(gulp.dest('www/js/'));
});

gulp.task('server', function() {
    return gulp.src('www/')
    .pipe(server({ }));
})

gulp.task('default', function () {
    return gulp.src('*.js')
    .pipe(gulp.dest('*.js'));
});

function error( e ) {
    console.error(e);
}

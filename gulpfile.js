'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');
var react = require('gulp-react');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');
var runSequence = require('run-sequence');
var vendor = require('gulp-concat-vendor');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('build', function() {
    runSequence(
        'clean',
        'vendor',
        ['copy-src-ng', 'copy-src-jsx']
    )
})

gulp.task('watch', function(cb) {
    watch('src/**/*', function() {
        gulp.start('build')
        .on('end', cb)
    });
})

gulp.task('clean', function() {
    return gulp.src('www')
    .pipe(clean().on('error', error));
})

gulp.task('vendor', function() {
    return gulp.src('vendor/*')
    .pipe(vendor('vendor.js').on('error', error))
    .pipe(gulp.dest('www/'));
});

gulp.task('copy-src-ng', function() {
    return gulp.src('src/js/**/*.js')
    .pipe(ngAnnotate().on('error', error))
    .pipe(gulp.dest('www/js/'));
});

gulp.task('copy-src-jsx', function() {
    return gulp.src('src/js/views/**/*.jsx')
    .pipe(react().on('error', error))
    .pipe(gulp.dest('www/js/views/'));
});

gulp.task('default', function () {
    return gulp.src('*.js')
    .pipe(gulp.dest('*.js'));
});

function error( e ) {
    console.error(e);
}

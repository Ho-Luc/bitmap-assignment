'use strict'

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var mocha = require('gulp-mocha');
var paths = ['*.js', 'test/*.js'];

gulp.task('lint', function(){
  return gulp.src(paths)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('mocha', function(){
  return gulp.src('test/testGreet.js')
    .pipe(mocha())
});

gulp.task('default', ['mocha', 'lint']);

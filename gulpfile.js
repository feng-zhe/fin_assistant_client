"use strict";

var gulp = require('gulp');
var gUtil = require('gulp-util');
var gTap = require('gulp-tap');
var gUglify = require('gulp-uglify');
var gRename = require('gulp-rename');
var gLess = require('gulp-less');

var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var runsequence = require('run-sequence');
var path = require('path');
var fs = require('fs');
var del = require('del');
var lessclean = require('less-plugin-clean-css');

// before hook
gulp.task('build-start', function() {});

// compile less
gulp.task('less', function(done) {
    var cleancss = new lessclean();
    return gulp.src('./src/less/*.less')
        .pipe(gLess({
            plugins: [cleancss]
        }))
        .pipe(gRename(function(fpath) {
            fpath.basename += '_min';
            fpath.extname = '.css';
        }))
        .pipe(gulp.dest('./public/css/'));
});

// compile react (just for index.js now)
gulp.task('react', function(done) {
    return gulp.src(['./src/js/react/*.js','!./src/js/react/components.js'], {
            read: false
        })
        .pipe(gTap(function(file) {
            file.contents = browserify(file.path)
                .transform('babelify', {
                    presets: ['react', 'es2015']
                })
                .bundle();
        }))
        .pipe(gRename(function(fpath) {
            fpath.basename += '_min';
            fpath.extname = '.js';
        }))
        .pipe(buffer())
        .pipe(gUglify())
        .pipe(gulp.dest('./public/javascripts/'));
});

// after hook
gulp.task('build-after', function() {});

// unit test
gulp.task('unit-test', function() {});

// build tasks
// production build
gulp.task('build-pro', function(done) {
    process.env.NODE_ENV = 'production';
    runsequence('build-start', 'less', 'react', 'build-after', function() {
        done();
    });
});
// development build
gulp.task('build-dev', function(done) {
    process.env.NODE_ENV = 'devlopment';
    runsequence('build-start', 'less', 'react', 'build-after', function() {
        done();
    });
});
// default build
gulp.task('build', ['build-dev']);

// clean the generated and temp files
gulp.task('clean', function() {
    return del(['public/*']);
});

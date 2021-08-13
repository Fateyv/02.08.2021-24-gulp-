const { parallel, src, dest } = require('gulp')
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-cssmin');

function copyJs() {
    return src('./src/**/*.js')
    .pipe(concat('app.js'))
    .pipe(dest('./dist'));
}

function copyCss() {
    return src('./src/**/*.css').pipe(dest('./dist'));
}

function copyHtml() {
    return src('./src/index.html').pipe(dest('./dist'));
}

function minCopyJs() {
    return src('./src/**/*.js')
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(dest('./dist'));
}

function minCopyCss() {
    return src('./src/**/*.css')
    .pipe(cssmin())
    .pipe(dest('./dist'));
}

function minCopyHtml() {
    return src('./src/index.html')
    .pipe(htmlmin())
    .pipe(dest('./dist'));
}


module.exports = {
    build: parallel(copyHtml, copyJs, copyCss),
    minify: parallel(minCopyJs, minCopyCss, minCopyHtml)
};
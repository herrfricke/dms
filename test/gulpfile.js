// include gulp
var gulp = require('gulp');
var jshint = require('gulp-jshint'); 
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var minifyHTML = require('gulp-minify-html');
var browserify = require('gulp-browserify'); 

 
// JS hint task
gulp.task('jshint', function() {
  gulp.src('../webapp/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

//minify new or changed HTML pages
gulp.task('htmlpage', function() {
  var htmlSrc = ['../webapp/*.html', '../webapp/templates/*.html'],
      htmlDst = '../webapp/build';
 
  gulp.src(htmlSrc)
    .pipe(changed(htmlDst))
    .pipe(minifyHTML())
    .pipe(gulp.dest(htmlDst));
});


// JS concat, strip debugging and minify
gulp.task('scripts', function() {
  gulp.src(['../webapp/js/main.js'])
  	.pipe(browserify())
    .pipe(concat('app.js'))
    // .pipe(stripDebug())
    // .pipe(uglify())
    .pipe(gulp.dest('../webapp/build'));
});
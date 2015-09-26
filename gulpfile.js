var gulp       = require('gulp'),
    babel      = require('gulp-babel'),
    watch      = require('gulp-watch'),
    browserify = require('browserify'),
    reactify   = require('reactify'),
    babelify   = require('babelify'),
    source     = require('vinyl-source-stream'),
    buffer     = require('vinyl-buffer');

gulp.task('default', ['browserify']);  

gulp.task('browserify', function() {
  var b = browserify({
    entries: './front/app.jsx',
    debug: true,
    transform: [reactify, babelify]
  });

  return b.bundle()
      .pipe(source('bundle.js'))
      .pipe(buffer())
      .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  return gulp.watch('front/**/*', ['browserify']);
});


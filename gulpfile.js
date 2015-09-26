var gulp   = require('gulp'),
    babel  = require('gulp-babel'),
    concat = require('gulp-concat'),
    watch  = require('gulp-watch');

gulp.task('default', function() {
  return gulp.src('components/**/*.jsx')
      .pipe(babel())
      .pipe(concat('react-app.js'))
      .pipe(gulp.dest('dist'));
});
  
gulp.task('watch', function() {
  return gulp.watch('components/**/*.jsx', ['default']);
});

var gulp = require('gulp'),
sass = require('gulp-sass'),
watch = require('gulp-watch');

gulp.task('scss', function () {
 return gulp.src('./static_src/scss/app.scss')
          .pipe(sass().on('error', sass.logError))
          .pipe(sass({outputStyle: 'compressed'}))
          .pipe(gulp.dest('./static/css/'));
});

gulp.task('watch', function () {
  gulp.watch('./static_src/scss/**/*.scss', ['scss']);
});

gulp.task('default', ['watch']);

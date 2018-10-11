const gulp = require('gulp')
const sass = require('gulp-sass')

gulp.task('sass', function () {
    return gulp.src('./src/sass/*.sass')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./src/assets/'));
  });
   
  gulp.task('default', function () {
    gulp.watch('./src/sass/*.sass', ['sass']);
  });
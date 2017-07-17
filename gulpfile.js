// https://github.com/AveVLad/gulp-connect

var gulp = require('gulp');
var connect = require('gulp-connect');
var inject = require('gulp-inject');
var typescript = require('gulp-typescript');

gulp.task('index', function () {
  var target = gulp.src('app/index.html');

  var source = gulp.src(['app/target/js/all.js', 'app/src/**/*.css'], { read: false });

  return target.pipe(inject(source, { relative: true })).pipe(gulp.dest('app/'));
})


gulp.task('connect', function () {
  connect.server({
    root: 'app',
    livereload: true,
    port: 8081
  });
});

gulp.task('html', function () {
  gulp.src('./app/**/*.html')
    .pipe(connect.reload());
});

gulp.task('css', function () {
  gulp.src('./app/**/*.css')
    .pipe(connect.reload());
});

gulp.task('js', function () {
  gulp.src('./app/**/*.js')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./app/**/*.html'], ['html']);
  gulp.watch(['./app/**/*.css'], ['css']);
  gulp.watch(['./app/**/*.js'], ['js']);
  gulp.watch(['./app/**/*.ts'], ['compile']);
});

gulp.task('compile', function () {
    return gulp.src('app/src/**/*.ts')
        .pipe(typescript({
            noImplicitAny: true,
            outFile: 'all.js'
        }))
        .pipe(gulp.dest('app/target/js/'));
});

gulp.task('default', ['connect', 'watch', 'compile', 'index']);
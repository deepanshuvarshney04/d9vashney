var gulp = require('gulp');
var livereload = require('gulp-livereload')
var uglify = require('gulp-uglifyjs');
var sass = require('gulp-sass')(require('sass'));
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
sass.compiler = require('node-sass');

gulp.task('imagemin', function () {
    return gulp.src('./themes/custom/tarining/images/*') 
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('./themes/custom/tarining/images'));
});
// gulp.task('sass', function () {
//     return gulp.src('./sass/**/*.scss')
//         .pipe(sass({outputStyle: 'uncompressed'}).on('error', sass.logError))
//         .pipe(gulp.dest('./css'));
// });

gulp.task('sass', function () {
    gulp.src('./sass/**/*.scss')
      .pipe(sourcemaps.init())
          .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
          .pipe(autoprefixer('last 2 version'))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./css'));
  });

gulp.task('uglify', function() {
  gulp.src('./themes/custom/training/js/*.js')
    .pipe(uglify('main.js'))
    .pipe(gulp.dest('./themes/custom/tarining/js'))
});
gulp.task('watch', function(){
    gulp.watch('./sass/**/*.scss', gulp.series('sass'));
    gulp.watch('./lib/*.js', gulp.series('uglify'));
    gulp.watch(['/css/style.css', './**/*.twig', './js/*.js']);
});
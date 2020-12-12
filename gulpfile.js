var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');

gulp.task('sass', function () {
    return gulp.src('app/scss/styles.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('app/css'))
});

gulp.task('images', function () {
    return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
});
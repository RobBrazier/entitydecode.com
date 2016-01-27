var gulp = require('gulp'),
	sass = require('gulp-sass'),
	uglify = require('gulp-uglify'),
	minifyCss = require('gulp-minify-css'),
	del = require('del'),
	concat = require('gulp-concat');

gulp.task('default', ['sass', 'js']);

gulp.task('sass', function() {
	del('public/assets/css');
	return gulp.src('scss/style.scss')
		.pipe(sass())
		.pipe(minifyCss())
		.pipe(gulp.dest('public/assets/css'));
});

gulp.task('js', function() {
	del('public/assets/js');
	return gulp.src(['js/jquery.min.js', 'js/bootstrap.min.js', 'js/htmlentities.js', 'js/scripts.js'])
		.pipe(uglify())
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest('public/assets/js'));
});
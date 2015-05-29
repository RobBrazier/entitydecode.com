var gulp = require('gulp'),
	sass = require('gulp-sass'),
	uglify = require('gulp-uglifyjs'),
	minifyCss = require('gulp-minify-css');

gulp.task('default', ['sass', 'js']);

gulp.task('sass', function() {
	gulp.src('scss/style.scss')
		.pipe(sass())
		.pipe(minifyCss())
		.pipe(gulp.dest('assets/css'));
});

gulp.task('js', function() {
	gulp.src(['js/jquery.min.js', 'js/bootstrap.min.js', 'htmlentities.js', 'scripts.js'])
		.pipe(uglify('scripts.js'))
		.pipe(gulp.dest('assets/js'));
});
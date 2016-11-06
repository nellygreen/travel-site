var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var del = require('del');
var usemin = require('gulp-usemin');
var rev = require('gulp-rev');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');


gulp.task('deleteDistFolder', function() {
	return del("./dist");
});

gulp.task('copyGeneralFiles', ['deleteDistFolder'], function() {
	var pathsToCopy = [
	'./app/**/*',
	'!./app/index.html',
	'!./app/assets/styles/**',
	'!./app/assets/scripts/**',
	'!./app/temp',
	'!./app/temp'
	]
	
	return gulp.src(pathsToCopy)
	.pipe(gulp.dest("./dist"));
});

gulp.task('optimizeImages', ['deleteDistFolder'], function() {
	return gulp.src(['./app/assets/images/**/*',  '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
	.pipe(imagemin({
		progressive: true,
		interlaced: true,
		multipath: true,
	}))
	.pipe(gulp.dest("./dist/assets/images"));
});

gulp.task('usemin', function() {
	return gulp.src("./app/index.html")
	.pipe(usemin({
		css: [function() {return rev()}, function() {return cssnano()}],
		js: [function() {return rev()}, function() {return uglify()}],
	}))
	.pipe(gulp.dest("./dist"));
});

gulp.task('build', ['deleteDistFolder','copyGeneralFiles','optimizeImages','usemin']);

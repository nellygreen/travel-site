var gulp = require ('gulp');
var watch = require ('gulp-watch');

gulp.task('default', function() {
	console.log('This is a default gulp task.');
});

gulp.task('html', function() {
	console.log('Html changes here.');
});

gulp.task('styles', function() {
	console.log('CSS changes here.');
})

gulp.task('watch', function() {
	watch('./app/index.html', function() {
		gulp.start('html');
	})

	watch('./app/assets/styles/**/*.css', function() {
		gulp.start('styles');
	});
});
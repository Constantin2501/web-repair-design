var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

function defaultTask(cb) {
	// place code for your default task here
	cb();
}

exports.default = defaultTask


// Static server
gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: "./src"
		},
		browser: "firefox"
	});
	gulp.watch("src/*.html").on('change', browserSync.reload);
});

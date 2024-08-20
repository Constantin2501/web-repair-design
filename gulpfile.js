var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

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

// gulp.task('mincss', async function () {
// 	return gulp.src('src/**/*.css')
// 		.pipe(cssmin())
// 		.pipe(rename({suffix: '.min'
// 		}))
// 		.pipe(gulp.dest('.dist'));
// });

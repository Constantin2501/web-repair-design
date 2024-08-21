const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');


// Static server
function bs() {
	serveSass();
	browserSync.init({
		server: {
			baseDir: "./src"
		},
		browser: "firefox"
	});
	watch("src/*.html").on('change', browserSync.reload);
	watch("src/sass/**/*.sass", serveSass);
	watch("src/js/*.js").on('change', browserSync.reload);
}

function serveSass() {
	return src("src/sass/*.sass")
		.pipe(sass())
		.pipe(dest("src/css"))
		.pipe(browserSync.stream());
}

// function ms () {
// 	return src('src/css/*.css')
// 		.pipe(cssmin())
// 		.pipe(rename({suffix: '.min'}))
// 		.pipe(dest('dist'));
// }

exports.serve = bs;
// exports.cssmin = ms;
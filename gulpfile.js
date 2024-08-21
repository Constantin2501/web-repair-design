const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));


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
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(dest("src/css"))
		.pipe(browserSync.stream());
}

exports.serve = bs;

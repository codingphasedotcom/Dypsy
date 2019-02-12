const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
var exec = require('child_process').exec;
const chalk = require('chalk');

gulp.task('default', ['webpack', 'styles', 'pages'], () => {
	gulp.watch('./assets/scss/**/*', ['styles']);
	gulp.watch('./assets/js/**/*', ['webpack']);
	gulp
		.watch([
			'./public/**/*',
			'./public/*',
			'!public/js/**/.#*js',
			'!public/css/**/.#*css'
		])
		.on('change', reload);
});

gulp.task('watch-proxy', ['webpack', 'styles', 'browser-sync-proxy'], () => {
	gulp.watch('./assets/scss/**/*', ['styles']);
	gulp.watch('./assets/js/**/*', ['webpack']);
	gulp
		.watch([
			'./public/**/*',
			'./public/*',
			'!public/js/**/.#*js',
			'!public/css/**/.#*css'
		])
		.on('change', reload);
});

gulp.task('styles', () => {
	gulp
		.src('assets/scss/**/*.scss')
		.pipe(
			sass({
				outputStyle: 'compressed'
			}).on('error', sass.logError)
		)
		.pipe(
			autoprefixer({
				browsers: ['last 2 versions']
			})
		)
		.pipe(gulp.dest('./public/css'))
		.pipe(browserSync.stream());
});

gulp.task('browser-sync', function() {
	browserSync.init({
		server: './public',
		notify: false,
		open: false //change this to true if you want the broser to open automatically
	});
});

gulp.task('pages', cb => {
	exec('npm run build', function(err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
});

gulp.task('webpack', cb => {
	exec('npm run dev:webpack', function(err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
});

gulp.task('build', ['styles'], cb => {
	exec('npm run build:webpack', function(err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
});

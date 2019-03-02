const chokidar = require('chokidar');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
module.exports = (directory, task) => {
	// Initialize watcher.
	var watcher = chokidar.watch(directory, {
		ignored: /(^|[\/\\])\../,
		persistent: true
	});

	// Something to use when events are received.
	// var log = console.log.bind(console);
	watcher
		.on('add', path => {
			task();
			// log(`File ${path} has been added`);
		})
		.on('change', path => {
			// watcher(config.build.sass.src, sassTask);
			task();
			// console.log(`File ${path} has been changed`);
		})
		.on('unlink', path => {
			task();
			// console.log(`File ${path} has been removed`);
		});
	// chokidar.watch('assets/scss/**/*.scss', config);
};

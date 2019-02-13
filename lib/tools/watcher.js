const chokidar = require('chokidar');
module.exports = (directory, func) => {
	// Initialize watcher.
	var watcher = chokidar.watch(directory, {
		ignored: /(^|[\/\\])\../,
		persistent: true
	});

	// Something to use when events are received.
	var log = console.log.bind(console);
	watcher
		.on('add', path => log(`File ${path} has been added`))
		.on('change', path => log(`File ${path} has been changed`))
		.on('unlink', path => log(`File ${path} has been removed`));
	// chokidar.watch('assets/scss/**/*.scss', config);
};

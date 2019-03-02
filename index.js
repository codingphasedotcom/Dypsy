const chalk = require('chalk');
const frameworkLogo = require('./lib/frameworkLogo');
const commander = require('commander');
const buildAllTasks = require('./lib/tasks/build.js');
const watchTasks = require('./lib/tasks/watch.js');
const devTasks = require('./lib/tasks/dev.js');

module.exports = () => {
	commander
		.version('1.0.0')
		.option('build', 'Build Static Site')
		.option('watcher', 'Watching Files')
		.option('dev', 'Development mode')
		.parse(process.argv);

	if (commander.build) {
		// console.log(chalk.hex('#38ff34').bold(frameworkLogo));
		console.log(
			chalk.blue(`Started Building...
  	`)
		);
		buildAllTasks();
	}
	if (commander.watcher) {
		console.log(
			chalk.blue(`Watching Files...
  	`)
		);
		watchTasks();
	}
	if (commander.dev) {
		console.log(
			chalk.blue(`Watching Files...
  	`)
		);
		devTasks();
	}

	console.log('Welcome to dypsy!');
};

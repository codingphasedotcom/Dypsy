// const config = require('./config');
const chalk = require('chalk');
const frameworkLogo = require('./lib/frameworkLogo');
const commander = require('commander');
const runAllTasks = require('./lib/tasks/run.js');

module.exports = () => {
	commander
		.version('1.0.0')
		.option('-b, --build', 'Build Static Site')
		.parse(process.argv);

	if (commander.build) {
		console.log(chalk.hex('#38ff34').bold(frameworkLogo));
		console.log(
			chalk.blue(`Started Building...
  	`)
		);
		runAllTasks();
	}

	console.log('Welcome to dypsy!');
};

const fse = require('fs-extra');
const path = require('path');
const glob = require('glob');
const pug = require('pug');
const sass = require('node-sass');
const chalk = require('chalk');
var projectLocation = process.cwd();
const config = require(`${projectLocation}/config.js`);
const autoprefixer = require('autoprefixer');
const postcss = require('postcss');

module.exports = () => {
	const srcPath = config.build.sass.src;
	const distPath = config.build.sass.destination;

	// read pages
	const files = glob.sync('**/[!exclude_]*.@(scss)', {
		cwd: `${srcPath}`
	});
	let pageContent;
	let completePage;

	files.forEach((file, i) => {
		const fileData = path.parse(file);
		const destPath = path.join(distPath, fileData.dir);
		// console.log(fileData.base);
		// create destination directory
		// fse.mkdirsSync(destPath);
		console.log(file);
		sass.render(
			{
				file: `${srcPath}/${file}`,
				includePaths: [`${srcPath}`],
				outFile: `${distPath}/${fileData.name}`,
				outputStyle: 'compressed'
			},
			function(err, result) {
				if (!err) {
					postcss([autoprefixer])
						.process(result.css.toString())
						.then(function(result) {
							result.warnings().forEach(function(warn) {
								console.warn(warn.toString());
							});
							fse.writeFileSync(`${destPath}/${fileData.name}.css`, result.css);
							console.log(result.css);
						});
				} else {
					console.log(chalk.red.bold(err));
				}
			}
		);
	});

	console.log(chalk.green.bold('Completed...'));
};

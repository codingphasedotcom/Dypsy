const fse = require('fs-extra');
const path = require('path');
const glob = require('glob');
const pug = require('pug');
const chalk = require('chalk');
var projectLocation = process.cwd();
const config = require(`${projectLocation}/config.js`);

// console.log(config);
module.exports = () => {
	const srcPath = config.build.pug.src;
	const distPath = config.build.pug.destination;
	// read pages
	const files = glob.sync('**/*.@(pug)', {
		cwd: `${srcPath}`
	});

	files.forEach((file, i) => {
		const fileData = path.parse(file);
		const destPath = path.join(distPath, fileData.dir);
		console.log(fileData.base);
		// create destination directory
		fse.mkdirsSync(destPath);

		// read page file
		const data = fse.readFileSync(`${srcPath}/${file}`, 'utf-8');

		// render page
		let pageContent;
		let completePage;

		// generate page content according to file type
		switch (fileData.ext) {
			case '.pug':
				var fn = pug.compile(data, {
					filename: `${srcPath}/${fileData.name}`,
					pretty: true
				})({
					pageTitle: 'Joes'
				});
				completePage = fn;
				break;
			default:
				pageContent = pageData.body;
		}
		// save the html file
		fse.writeFileSync(`${destPath}/${fileData.name}.html`, completePage);
	});

	console.log(chalk.green.bold('Completed...'));
};

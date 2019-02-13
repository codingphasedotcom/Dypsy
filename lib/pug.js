const fse = require('fs-extra');
const path = require('path');
const ejs = require('ejs');
const marked = require('marked');
const frontMatter = require('front-matter');
const glob = require('glob');
const config = require('../config');
const pug = require('pug');
const chalk = require('chalk');
const frameworkLogo = require('./frameworkLogo');
const commander = require('commander');

module.exports = (srcPath, distPath) => {
	const srcPath = './assets';
	const distPath = config.build.outputPath;

	// read pages
	const files = glob.sync('**/*.@(pug)', {
		cwd: `${srcPath}/pages`
	});

	files.forEach((file, i) => {
		const fileData = path.parse(file);
		const destPath = path.join(distPath, fileData.dir);
		console.log(fileData.base);
		// create destination directory
		fse.mkdirsSync(destPath);

		// read page file
		const data = fse.readFileSync(`${srcPath}/pages/${file}`, 'utf-8');

		// render page
		let pageContent;
		let completePage;

		// generate page content according to file type
		switch (fileData.ext) {
			case '.pug':
				var fn = pug.compile(data, {
					filename: `${srcPath}/pages/${fileData.name}`,
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

	console.log(chalk.hex('#38ff34').bold(frameworkLogo));
	console.log(chalk.green.bold('Completed...'));
};

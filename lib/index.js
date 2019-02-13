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
const pugTask = require('./tasks/pug.js');
const commander = require('commander');

commander
	.version('0.1.0')
	.option('-b, --build', 'Build Static Site')
	.parse(process.argv);
if (commander.peppers) {
	console.log('pressed p');
}
console.log(
	chalk.blue(`Started Building...
	`)
);
pugTask('./assets', './public');
console.log(chalk.hex('#38ff34').bold(frameworkLogo));
// clear destination folder
// fse.emptyDirSync(distPath);

// copy assets folder
// fse.copy(`${srcPath}/assets`, `${distPath}/assets`)

// // read pages
// const files = glob.sync('**/*.@(md|ejs|html|pug)', { cwd: `${srcPath}/pages` });
//
// files.forEach((file, i) => {
// 	const fileData = path.parse(file);
// 	const destPath = path.join(distPath, fileData.dir);
// 	console.log(fileData.base);
// 	// create destination directory
// 	fse.mkdirsSync(destPath);
//
// 	// read page file
// 	const data = fse.readFileSync(`${srcPath}/pages/${file}`, 'utf-8');
//
// 	// render page
// 	const pageData = frontMatter(data);
//
// 	let pageContent;
// 	let completePage;
//
// 	// generate page content according to file type
// 	switch (fileData.ext) {
// 		case '.md':
// 			pageContent = marked(pageData.body);
// 			break;
// 		case '.ejs':
// 			const templateConfig = Object.assign({}, config, {
// 				page: pageData.attributes
// 			});
// 			pageContent = ejs.render(pageData.body, templateConfig, {
// 				filename: `${srcPath}/pages/${file}`
// 			});
// 			// render layout with page contents
// 			const layout = pageData.attributes.layout || 'default';
// 			const layoutFileName = `${srcPath}/pages/layouts/${layout}.ejs`;
// 			const layoutData = fse.readFileSync(layoutFileName, 'utf-8');
// 			completePage = ejs.render(
// 				layoutData,
// 				Object.assign({}, templateConfig, {
// 					body: pageContent,
// 					filename: layoutFileName
// 				})
// 			);
//
// 			break;
// 		case '.pug':
// 			var fn = pug.compile(data, {
// 				filename: `${srcPath}/pages/${fileData.name}`,
// 				pretty: true
// 			})({
// 				pageTitle: 'Joes'
// 			});
// 			completePage = fn;
// 			break;
// 		default:
// 			pageContent = pageData.body;
// 	}
// 	// save the html file
// 	fse.writeFileSync(`${destPath}/${fileData.name}.html`, completePage);
// });
//
// console.log(chalk.hex('#38ff34').bold(frameworkLogo));
// console.log(chalk.green.bold('Completed...'));

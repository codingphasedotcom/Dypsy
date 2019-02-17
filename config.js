const projects = require('./assets/data/projects');
var projectLocation = process.cwd();
const config = `${projectLocation}/config.js`;

module.exports = {
	site: {
		title: 'DYPSY',
		description: 'A simple static site generator',
		basePath: process.env.NODE_ENV === 'production' ? '/public' : '',
		projects
	},

	build: {
		sass: {
			src: `${projectLocation}/assets/scss`,
			files: `${projectLocation}/assets/scss/main.scss`,
			destination: `${projectLocation}/public`
		},
		pug: {
			src: `${projectLocation}/assets/pages`,
			destination: `${projectLocation}/public`
		},
		outputPath: process.env.NODE_ENV === 'production' ? './docs' : './public'
	}
};

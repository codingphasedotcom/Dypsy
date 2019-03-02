// const projects = require('./assets/data/projects');
var projectLocation = process.cwd();
const config = `${projectLocation}/config.js`;

module.exports = {
	site: {
		title: 'DYPSY',
		description: 'A simple static site generator',
		basePath: process.env.NODE_ENV === 'production' ? '/public' : ''
	},
	build: {
		sass: {
			src: `${projectLocation}/assets/scss`,
			destination: `${projectLocation}/public/dist/css`
		},
		pug: {
			src: `${projectLocation}/assets/pages`,
			destination: `${projectLocation}/public`
		},
		browserSync: {
			src: `${projectLocation}/public`
		},
		outputPath: process.env.NODE_ENV === 'production' ? './docs' : './public'
	}
};

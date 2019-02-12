const projects = require('./assets/data/projects')

module.exports = {
	site: {
		title: 'DYPSY',
		description: 'A simple static site generator',
		basePath: process.env.NODE_ENV === 'production' ? '/public' : '',
		projects
	},
	build: {
		outputPath: process.env.NODE_ENV === 'production' ? './docs' : './public'
	}
}

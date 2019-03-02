const pugTask = require('./pug.js');
const sassTask = require('./sass.js');
const browserSyncTask = require('./sass.js');
const watcher = require('../tools/watcher.js');
var projectLocation = process.cwd();
const config = require(`${projectLocation}/config.js`);

module.exports = () => {
	watcher(config.build.pug.src, pugTask);
	watcher(config.build.sass.src, sassTask);
	// watcher(config.build.sass.src, sassTalk);
};

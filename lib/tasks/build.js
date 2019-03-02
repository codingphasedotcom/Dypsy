const pugTask = require('./pug.js');
const sassTask = require('./sass.js');
const browserSyncTask = require('./sass.js');
module.exports = () => {
	pugTask();
	sassTask();
	// browserSyncTask();
};

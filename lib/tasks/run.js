const pugTask = require('./pug.js');
const sassTask = require('./sass.js');
module.exports = () => {
	pugTask();
	sassTask();
};

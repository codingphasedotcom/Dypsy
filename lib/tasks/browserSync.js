const browserSync = require('browser-sync');
const reload = browserSync.reload;
module.exports = () => {
	browserSync.init({
		server: './public',
		notify: false,
		open: false //change this to true if you want the broser to open automatically
	});
};

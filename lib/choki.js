const watcher = require('./tools/watcher.js');
const config = require('../../');
watcher('assets/scss/**/*.scss', 'sass');

//Core module
const path = require('path');

module.exports = path.dirname(require.main.filename);// require.main refers to the file we ran => app.js


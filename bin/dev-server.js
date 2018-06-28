const serve = require('webpack-serve');

const openBrowser = require('./lib/open-browser');
const config = require('../webpack.config');

serve({ config, clipboard: false }).then((server) => {
  server.on('listening', () => {
    openBrowser('http://localhost:8080');
  });
});
const path = require('path');

const PORT = process.env.PORT || 8080;

const OUTPUT_PATH = path.join(__dirname, '..', 'dist');
const ASSET_OUTPUT_PATH = path.join(OUTPUT_PATH, 'assets');
const PUBLIC_PATH = '/assets/';

const VENDOR_LISTS = ['react', 'react-dom', 'react-router', 'react-router-dom'];

module.exports = {
  PORT,
  OUTPUT_PATH,
  ASSET_OUTPUT_PATH,
  PUBLIC_PATH,
  VENDOR_LISTS,
};

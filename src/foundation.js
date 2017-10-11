// Add Foundation JavaScript so we can use the JS components.
// TODO: Make this work.

// jQuery
const $ = require('../node_modules/jquery/dist/jquery.min');
global.jQuery = $;

// if you want all features of foundation
// require('./node_modules/foundation-sites/dist/js/foundation.js');

// if you want only some features
require('../node_modules/what-input/dist/what-input');
require('../node_modules/foundation-sites/js/foundation.core');
require('../node_modules/foundation-sites/js/foundation.util.mediaQuery');

// export default Foundation;
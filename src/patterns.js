const flags = require('./flags');
const alpha = require('./patterns/alpha');
const roman = require('./patterns/roman');

module.exports = {
	[flags.PATTERN_ALPHA]: alpha,
	[flags.PATTERN_ROMAN]: roman,
};
const flags = require('./src/flags');
const patterns = require('./src/patterns');

const convert = (value, pattern = flags.PATTERN_ALPHA) => {
	if (patterns.hasOwnProperty(pattern)) {
		return patterns[pattern](value);
	} else {
		return value;
	}
};

const parse = (value, pattern = flags.PATTERN_ALPHA) => 
	typeof value === 'string' ? convert(convert(value, pattern), pattern) : value;

module.exports = {flags, patterns, convert, parse};
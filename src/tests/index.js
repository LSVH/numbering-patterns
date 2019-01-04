const expect = require('chai').expect;
const convert = require('../../').convert;
const parse = require('../../').parse;
const flags = require('../../').flags;

describe('convert(value [, flags.PATTERN_ALPHA])', () => {
	const string = 'ABC';
	const invalidString = 'A?B?C!';
	const number = (
		3 +               // AB[C]
		((26 ** 2) * 2) + // A[B]C
		((26 ** 1) * 1)   // [A]BC
	);

	it('set value to a string ('+string+'), expect a number ('+number+').',
		() => expect(convert(string)).to.deep.equal(number));

	it('set value to a number ('+number+'), expect a string ('+string+').',
		() => expect(convert(number)).to.deep.equal(string));

	it('set value to a incorrectly formatted string ('+invalidString+'),'
		+' expect a correctly formatted string ('+string+').',
		() => expect(parse(invalidString)).to.deep.equal(string));
});

describe('convert(value, flags.PATTERN_ROMAN)', () => {
	const pattern = flags.PATTERN_ROMAN;
	const string = 'MCCXLVI';
	const invalidString = 'M?C?C?X?L?V?I';
	const number = (
		1000 + // [M]CCXLVI
		200 +  // M[CC]XLVI
		40 +   // MCC[XL]VI
		6      // MCCXL[VI]
	);

	it('set value to a string ('+string+'), expect a number ('+number+').',
		() => expect(convert(string, pattern)).to.deep.equal(number));

	it('set value to a number ('+number+'), expect a string ('+string+').',
		() => expect(convert(number, pattern)).to.deep.equal(string));
});

describe('parse(value [, flags.PATTERN_ALPHA])', () => {
	const expected = 'ABC';
	const input = 'A?B?C!';
	it('parse incorrect string ('+input+'), to a correct string ('+expected+').',
		() => expect(parse(input)).to.deep.equal(expected));

});

describe('parse(value, flags.PATTERN_ROMAN)', () => {
	const pattern = flags.PATTERN_ROMAN;
	const expected = 'MCCXLVI';
	const input = 'M?C?C?X?L?V?I';
	it('parse incorrect string ('+input+'), to a correct string ('+expected+').',
		() => expect(parse(input)).to.deep.equal(expected), pattern);

});
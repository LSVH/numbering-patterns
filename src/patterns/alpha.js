module.exports = input => {
	const chars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
	if (typeof input === 'string') {
		input = input.toUpperCase()
			.split('').filter(x => chars.indexOf(x) !== -1).join('');

		switch (input.length) {
			case 0:
				return input;

			case 1:
				const indexOf = chars.indexOf(input);

				return indexOf !== -1 ? indexOf + 1 : input;

			default:
				const inputLength = input.length;
				const lastIndexOf = chars.indexOf(input.charAt(inputLength - 1));

				let output = lastIndexOf !== -1 ? lastIndexOf + 1 : 0;

				for (let i = 1; i < inputLength; i++) {
					const indexOf = chars.indexOf(input.charAt(inputLength - (i + 1)));

					output += indexOf !== -1 ? 
						(chars.length ** (inputLength - i)) * (indexOf + 1) : 0;
				}

				return output;
		}
	} else {
		input = Math.round(input);

		const charsLength = chars.length;

		if (input <= charsLength) {
			return chars[input - 1];

		} else {
			const rem = Math.floor(input % charsLength);
			const div = Math.floor(input / charsLength);

			const numToStr = (num, str = '') => {
				const rem = Math.floor(num % charsLength);
				const div = Math.floor(num / charsLength);

				return rem !== 0 ? numToStr(div, str + chars[rem - 1]) : str;
			};

			return numToStr(div) + chars[rem -1];
		}
	}
};
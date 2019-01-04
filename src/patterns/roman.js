module.exports = input => {
	const halves = ['V','L','D'];
	const wholes = ['I','X','C','M'];
	if (typeof input === 'string') {
		let steps = [];
		for (let i = 0; i < input.length; i++) {
			const char = input.charAt(i);
			const stepsLength = steps.length;
			const prevChar = stepsLength ? steps[stepsLength - 1].charAt(0) : '';
			const prevCharLength = stepsLength ? steps[stepsLength - 1].length : 0;

			if (stepsLength && prevCharLength < 3 && prevChar === char) {
				steps[stepsLength - 1] += char;

			} else {
				const charAsWhole = wholes.indexOf(char);
				const charAsHalve = halves.indexOf(char);

				const checkPrevChar = thePrevChar => thePrevChar !== -1 && (
					// Lower chars's can be appended to higher prevChar's.
					// e.g. 'XI' or 'XV' but not 'IX'.
					(
						thePrevChar > charAsWhole &&
						thePrevChar > charAsHalve
					)
					||
					// One level higher prevChar's can be prepended to
					// lower char's. But only if there is only one prevChar.
					// e.g. 'IX' or 'IV' but not 'IIX', 'IC' or 'IV'.
					(
						(
							thePrevChar >= charAsWhole - 1 &&
							thePrevChar >= charAsHalve - 1
						) &&
						prevCharLength === 1
					)
				);

				if ((stepsLength && (
						checkPrevChar(wholes.indexOf(prevChar)) ||
						checkPrevChar(halves.indexOf(prevChar))
					)) || (!stepsLength && (charAsWhole || charAsHalve))) {
					steps.push(char);
				} else {
					continue;
				}
			}
		}

		let out = 0;
		let prevValue = 0;
		for (let i = 0; i < steps.length; i++) {
			const char = steps[i].charAt(0);

			let value = 0;
			if (halves.indexOf(char) !== -1) {
				value = (10 ** halves.indexOf(char)) * 5;
				if (value > prevValue) {
					value = value - (prevValue * 2);
				}
			} else {
				if (wholes.indexOf(char) === -1) continue;

				// Characters what represent whole numbers can't be longer then 3 characters.
				const length = steps[i].length <= 3 ? steps[i].length : 3;

				value = (10 ** wholes.indexOf(char)) * length;
			}

			prevValue = value;
			out += value;
		}
		return out;
	} else {
		input = input.toString();

		let output = '';
		for (let i = 0; i < input.length; i++) {
			const interval = parseInt(input.charAt(input.length - (i + 1)));

			output = (interval > 0 && interval < 4 ? wholes[i].repeat(interval) : (
				interval === 4 ? wholes[i] + halves[i] : (
					interval === 5 ? halves[i] : (
						interval > 5 && interval < 9 ?
							halves[i] + wholes[i].repeat(interval - 5) : (
								interval === 9 ? wholes[i] + wholes[i + 1] : ''
			))))) + output;
		}

		return output;
	}
};
# Numbering Patterns

>  Convert numbers to a specified numbering pattern and vice-versa. 

[![NPM](https://img.shields.io/npm/v/numbering-patterns.svg)](https://www.npmjs.com/package/numbering-patterns) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save numbering-patterns
```

## Usage

```jsx
import {convert, parse, flags} from 'numbering-patterns'

convert(3);                         // output: 'C'
convert(3, flags.PATTERN_ROMAN);    // output: 'III'
convert('B');                       // output: 2
convert('V', flags.PATTERN_ROMAN);  // output: 5

parse('A?B');   // output: 'AB'
parse('IIII');  // output: 'III'
```

## Syntax

```jsx
convert(value, pattern = flags.PATTERN_ALPHA);
```

Returns a string or an integer depending on what __value__ is passed to it.

* **value**: The string convert to an integer or the integer to convert to a numbering pattern string.
* **pattern**: The name of the numbering pattern to use for the conversion *(default = flags.PATTERN_ALPHA)*.

---

```jsx
parse(value, pattern = flags.PATTERN_ALPHA);
```

Returns a string in the correct format of the specified numbering pattern.

* **value**: The string to parse to a correctly formatted numbering pattern string.
* **pattern**: The name of the numbering pattern to parse the string to *(default = flags.PATTERN_ALPHA)*.

## Supported patterns

The following numbering patterns are supported.

### Alphabetic numeral

__Flag name:__
```
flags.PATTERN_ALPHA
```

__Example:__
```
1, 2, 3, ..., 53, 54, 55, ...
A, B, C, ..., AA, AB, AC, ...
``` 

### Roman numeral

__Flag name:__
```
flags.PATTERN_ROMAN
```

__Example:__
```
1,  2,   3,  4, 5,  6,   7,    8,  9, 10, ..., 50, ..., 100, ..., 500, ...
I, II, III, IV, V, VI, VII, VIII, IX,  X, ...,  L, ...,   C, ...,   D, ...
``` 

## License

MIT © [LSVH](https://github.com/LSVH)

// function numberOfItems(arr, item) {
// 	// Write the code that goes here
// 	arr.reduce((a, item) => {
// 		if (a) return a;
// 		if (item.id === itemId) return item;
// 		if (item[nestingKey])
// 			return findItemNested(item[nestingKey], itemId, nestingKey);
// 	}, null);
// }

// var arr = [25, 'apple', ['banana', 'strawberry', 'apple', 25]];
// console.log(numberOfItems(arr, 25));
// console.log(numberOfItems(arr, 'apple'));
const str = 'I want to rock this interview';

const mostRepeatedLetter = (str) => {
	// Converting string to lower case
	str = str.toLowerCase();

	// Remove extra space and preceding tokens.
	str = str.replace(/\s+/g, '').trim();
	// console.log(str);

	// String split with space
	let strArr = str.split('');

	// Mapping characters with frequency
	const map = strArr.reduce((acc, val) => {
		if (acc.has(val)) {
			acc.set(val, acc.get(val) + 1);
		} else {
			acc.set(val, 1);
		}
		return acc;
	}, new Map());

	// console.log(map);
	const frequencyArray = Array.from(map);
	// console.log(frequencyArray);

	// returning highest frequency character
	return frequencyArray.sort((a, b) => {
		// console.log('a is ', a);
		// console.log('b is ', b);
		return b[1] - a[1];
	})[0][0];
};

console.log(mostRepeatedLetter(str));

// console.log('max:' + max + 'max_key:' + max_key);
// mostRepeatedLetter('I want to rock this interview');
// mostRepeatedLetter(str);

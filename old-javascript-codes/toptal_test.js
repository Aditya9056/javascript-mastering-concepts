// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function soting(text) {
	for (i in text) {
		let d = i.split('').sort().join('');
		console.log(d);
	}
}
function solution(a, b, p) {
	// write your code in JavaScript (Node.js 8.9.4)
	let ind,
		oind = [];

	console.log(a);
	console.log(soting(a));

	for (index = 0; index < b.length; ++index) {
		value = b[index];
		let search = value.search(p);

		if (search !== undefined && search !== -1) {
			ind = b.indexOf(value);
		}
	}

	if (ind) {
		return a[ind];
	} else {
		return 'NO CONTACT';
	}
}

let a = ['pim', 'pom', 'amy'];
let b = ['99883344', '37829738'];
let p = '1';

console.log(
	solution(
		['sander', 'amy', 'ann', 'michael'],
		['123456789', '234567890', '789123456', '123123123'],
		'1'
	)
);

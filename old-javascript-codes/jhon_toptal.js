function solution(year, A, B, W) {
	let days = [
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
		'Sunday',
	];
	let months = {
		January: 31,
		February: 28,
		March: 31,
		April: 30,
		May: 31,
		June: 30,
		July: 31,
		August: 31,
		September: 30,
		October: 31,
		November: 30,
		December: 31,
		key: function (n) {
			return this[Object.keys(this)[n]];
		},
	};
	// write your code in JavaScript (Node.js 8.9.4)
	if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
		console.log(year + ' is a leap year');
	} else {
		console.log(year + ' is not a leap year');
	}

	let sum = months[A] + months['May'];

	// console.log(sum / 4);
	return sum;
}

solution(2014, 'April', 'May', 'Wednesday');

// Example 1
let name = 'jacob';

function someFunc() {
	console.log(name);
}

name = 'Joey';
someFunc();

// Example 2

function out() {
	let a = 20;
	function inn() {
		console.log('1sdfsd');
	}

	// even if I change a value before returning the function it will send the most recent value because it sends the reference not the value

	return inn;
}

const newF = out();

console.log(newF);

newF();

// Example 3

function eout() {
	let b = 34;

	function out() {
		let a = 20;

		function inn() {
			console.log(a, b);
		}

		inn();
	}

	out();
}

eout();

function get_number(string) {
	return parseInt(string) || 0;
}

console.log(get_number('dfdf'));

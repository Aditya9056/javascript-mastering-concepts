// first
function s(so) {
	so = so / 3;
	console.log(so());
	console.log(typeof so);
}

// s(45); // TypeError: so is not a function

// second
const a = 30; 
a = 34; //TypeError: Assignment to constant variable.

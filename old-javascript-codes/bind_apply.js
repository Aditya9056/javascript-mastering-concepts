// var pokemon = {
// 	firstname: 'Pika',
// 	lastname: 'Chu ',
// 	getPokeName: function () {
// 		var fullname = this.firstname + ' ' + this.lastname;
// 		return fullname;
// 	},
// };

// var pokemonName = function () {
// 	console.log(this.getPokeName() + 'I choose you!');
// };

// var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

// logPokemon(); // 'Pika Chu I choose you!'
// console.log(pokemonName);

function create() {
	var count = 0;
	return {
		increment: function () {
			count++;
		},

		print: function () {
			console.log(count);
		},
	};
}

var c = create();
c.increment();
c.print(); // ==> 1

console.log(2 + 5 + '3');

var h = 1;

if (function f() {}) {
	h += typeof f;
}
console.log(h);

var output = (function (x) {
	delete x;
	return x;
})(0);

console.log(output);
console.log('hello');

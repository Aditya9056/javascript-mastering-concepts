function johnMary(str) {
	// Your code goes here
	let jhon = 0,
		mary = 0,
		i = 0;

	str.split('&').forEach((word) => {
		const numberOfOccurrences = str.match(new RegExp(word, 'g')).length;
		// console.log(`${word}`);

		if (`${word}` === 'Jhon') {
			jhon++;
		} else {
			mary++;
		}
	});

	if (jhon === mary) {
		return true;
	} else {
		return false;
	}
}

console.log(johnMary('Jhon&Mary&Mary&Jhon'));

let average, max;

let data = [
	{
		page: 1,
		totalPages: 5,
		data: [
			{
				title: 'Movie 1',
				rating: 4.1,
			},
			{
				title: 'Movie 2',
				rating: 7.2,
			},
		],
	},
	{
		page: 2,
		totalPages: 5,
		data: [
			{
				title: 'Movie 3',
				rating: 4.3,
			},
			{
				title: 'Movie 4',
				rating: 2.4,
			},
		],
	},
];

let rating = [];
for (i in data) {
	for (k in data) {
		rating.push(data[i].data[k].rating);
	}
}

// console.log(rating);
average = rating.reduce((total, num, _, { length }) => {
	return total + num / length;
}, 0);
console.log('The average is ' + average + '\n');
console.log('The highest is ' + Math.max(...rating));

function x() {
	for (let i = 1; i < 6; i++) {
		setTimeout(function () {
			console.log(i);
		}, i * 1000);
	}
}
x();

//it will print 1 2 3 4 5

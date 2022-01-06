function addDashes(f) {
	console.log(f);

	// f_val = f.replace(/\D[^\.]/g, '');

	f_val = f.replace(/-|\s/g, '');

	if (f.length >= 2) {
		f =
			f_val.slice(0, 3) +
			'-' +
			f_val.slice(3, 6) +
			'-' +
			f_val.slice(6, 9) +
			'-' +
			+f_val.slice(9, 12) +
			'-' +
			f_val.slice(12, 14);
	}

	console.log(f);
}
addDashes('0 - 22 1985--324');

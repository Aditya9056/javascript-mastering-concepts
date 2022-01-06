function countItems(arr, item) {
	let totc = 0; // totc is now local
	for (let i = 0; i < arr.length; i++) {
		// iterate on arr
		let isarray = arr[i].constructor === Array; // if the element is a nested array
		if (isarray) {
			totc += countItems(arr[i], item);
		} // recursion, using the return value

		let isin = arr[i] === item; // ELSE if the item is in the arr
		if (isin) {
			totc++;
		}
	}
	return totc; // the length of the sum array show how many items founded
}
var arr = [25, 'apple', ['banana', 'strawberry', 'apple', 25]];
console.log(countItems(arr, 'apple'));

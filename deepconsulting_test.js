async function retryRequest(promiseFunc, nrOfRetries) {
	// Write your code here
	return (data = await promiseFunc(nrOfRetries));
	// console.log(data); // 10
}

let hasFailed = false;
function getUserInfo() {
	return new Promise((resolve, reject) => {
		if (!hasFailed) {
			hasFailed = true;
			reject('Exception!');
		} else {
			resolve('Fetched user!');
		}
	});
}

let promise = retryRequest(getUserInfo, 3);

if (promise) {
	promise
		.then((result) => console.log(result))
		.catch((error) => console.log('Error!'));
}

module.exports.retryRequest = retryRequest;

console.log('hasPromiseAll', Promise.all)

const returnTrue = () => {
	return true;
};

const returnStuff = stuff => {
	return stuff;
};

const request = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(true);
		}, 100);
	})
	.then(res => false)
	.then(res => 3)
	.then(res => {
		return 5;
	})
	.then(returnTrue)
	// .then(returnStuff)
	// .then(res => {
	// 	return returnStuff(6);
	// })
};

request()
	.then(res => {
		console.log("res is", res);
	});

request()
	.then(res => {
		if(res === 6) {
			console.log("neat");
		} else {
			console.log("not neat");
		}
	});

request()
	.then(value => {
		console.log("invert boolean", !value);
	});

const userData = {
	email: "test@test.com",
	password: "asdfasdf",
	id: 1
};

const authData = {
	access: "access.token",
	expiresOn: new Date(Date.now() + 60000),
	refresh: "refresh.token"
};

const mergeObjects = (x, y) => {
	return {
		...x,
		...y
	};
};

const newObj = mergeObjects(userData, authData);
console.log("newObj", newObj);

const logKeyValue = (args) => {
	console.log("spread", args);
};

logKeyValue(newObj);

userData.id = 2;
userData.name = 'Justin';

newObj.email = "stuff";

console.log("userData", userData);
console.log("newObj", newObj);

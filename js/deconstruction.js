const extractUser = ({ email, id }) => {
	return {
		email,
		id
	};
};

const userData = {
	email: "test@test.com",
	password: "asdfasdf",
	id: 1
};

const user = extractUser(userData);
if(user) {
	console.log("i wonder...");
} else {
	console.log("nope");
}

console.log("userData", userData);
console.log("user", user);

const creds = { id, password } = userData; // double assignment does not work. effectively `creds = userData`
console.log("creds", creds);
console.log("id", id);
console.log("password", password);
